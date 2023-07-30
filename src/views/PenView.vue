<template>
  <v-container fluid>
    <v-row>
      <my-month-selector class="mt-2" v-bind="{dataSource}">
      </my-month-selector>
    </v-row>
    <v-row>
      <DxTabs
        class="mt-3"
        :data-source="tabs"
        :selected-index="selectedIndex"
        @item-click="onItemClick"
      >
      </DxTabs>
    </v-row>
    <v-row>
      <!-- <DxPivotGrid
        id="pivotgrid"
        :data-source="pivotGridDataSource"
        :allow-sorting-by-summary="true"
        :allow-sorting="true"
        :allow-filtering="true"
        :allow-expand-all="true"
        :show-borders="true"
        :show-column-grand-totals="false"
        :show-row-grand-totals="false"
        :show-row-totals="false"
        :show-column-totals="false"
        @exporting="onExportingPivot"
      >
        <DxFieldChooser :enabled="false" :height="400" />
        <DxExportPivot :enabled="true" />
      </DxPivotGrid> -->
      <div>
        <DxDataGrid
          class="mt-3"
          :columns="columnsPen"
          :data-source="dataSource"
          no-data-text=""
          :hoverStateEnabled="true"
          width="97vw"
          :showBorders="true"
          :focusedRowEnabled="true"
          :word-wrap-enabled="true"
          @exporting="onExporting"
          :visible="isVisible"
        >
          <DxSelection mode="single"> </DxSelection>
          <DxLoadPanel :enabled="true" />
          <DxPaging :enabled="false" />
          <DxExport :enabled="true" :allow-export-selected-data="true" />
        </DxDataGrid>
      </div>
      <DxDataGrid
        class="mt-3"
        :columns="columnsPenPower"
        :data-source="dataSourcePower"
        no-data-text=""
        :hoverStateEnabled="true"
        width="97vw"
        :showBorders="true"
        :focusedRowEnabled="true"
        :word-wrap-enabled="true"
        @exporting="onExporting"
        :visible="isVisiblePower"
        :show-column-lines="true"
      >
        <DxEditing
          :allow-updating="true"
          mode="batch"
          :select-text-on-edit-start="true"
          start-edit-action="dblClick"
        />
        <DxSelection mode="single"></DxSelection>
        <DxScrolling mode="virtual" />
        <DxLoadPanel :enabled="true" />
        <DxPaging :enabled="false" />
        <DxExport :enabled="true" :allow-export-selected-data="true" />
      </DxDataGrid>
      <div id="divChart" class="w-100 mt-3">
        <MyChartPen></MyChartPen>
      </div>
    </v-row>
  </v-container>
</template>
<script>
import MyMonthSelector from '@/components/MyMonthSelector'
import DxTabs from 'devextreme-vue/tabs'
import DataSource from 'devextreme/data/data_source'
import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source'
import CustomStore from 'devextreme/data/custom_store'

import {
  DxDataGrid,
  DxSelection,
  DxExport,
  DxEditing,
  DxScrolling,
  DxLoadPanel,
  DxPaging,
} from 'devextreme-vue/data-grid'
import {tabs, columnsPen, columnsPenPower} from '@/components/ColumnsPen.js'
// import {
//   DxPivotGrid,
//   DxExport as DxExportPivot,
//   DxFieldChooser,
// } from 'devextreme-vue/pivot-grid'
import axios from '@/api/axios'
import {Workbook} from 'exceljs'
import {saveAs} from 'file-saver-es'
import {exportDataGrid} from 'devextreme/excel_exporter'
// import {exportPivotGrid} from 'devextreme/excel_exporter'
import MyChartPen from '@/components/MyChartPen'
export default {
  name: 'MyPen',
  data() {
    const dataSource = new DataSource({
      store: new CustomStore({
        key: 'id',
        load: () => {
          const year = this.$store.state.year
          const month = this.$store.state.month
          const d = year
            .toString()
            .concat('-', month.toString(), '-01T00:00:00')

          return axios
            .get('pens', {
              params: {date: d},
            })
            .catch((e) => {
              console.log(e)
            })
        },
      }),
    })
    const pivotGridDataSource = new PivotGridDataSource({
      store: new CustomStore({
        key: 'id',

        // load: () => {
        //   return axios.get('/Pens/PenPivot').catch((e) => {
        //     console.log(e)
        //   })
        // },
      }),
      fields: [
        {
          caption: 'Блок',
          dataField: 'unit',
          area: 'column',
          // width: 120,
        },
        {
          caption: 'ПЭН',
          dataField: 'pen',
          area: 'column',
        },
        {
          dataField: 'date',
          dataType: 'date',
          area: 'row',
        },
        {
          caption: 'Время, ч',
          dataField: 'time',
          summaryType: 'sum',
          dataType: 'number',
          format: {
            type: 'fixedPoint',
            precision: 1,
          },
          area: 'data',
        },
        {
          caption: 'Расход, т/ч',
          dataField: 'flow',
          summaryType: 'avg',
          dataType: 'number',
          format: {
            type: 'fixedPoint',
            precision: 0,
          },
          area: 'data',
        },
        {
          caption: 'Ток, А',
          dataField: 'power',
          summaryType: 'avg',
          dataType: 'number',
          format: {
            type: 'fixedPoint',
            precision: 0,
          },
          area: 'data',
        },
      ],
    })
    const dataSourcePower = new DataSource({
      store: new CustomStore({
        key: 'id',
        load: () => {
          const year = this.$store.state.year
          const month = this.$store.state.month
          const d = year
            .toString()
            .concat('-', month.toString(), '-01T00:00:00')

          return axios
            .get('pens/Power', {
              params: {date: d},
            })
            .catch((e) => {
              console.log(e)
            })
        },
        update: (key, values) => {
          // console.log('key=', key, 'val=', values)
          return axios
            .put('pens/Power', {
              id: key,
              values: values,
            })
            .catch((e) => {
              console.log(e)
            })
        },
      }),
    })
    return {
      dataSource: dataSource,
      dataSourcePower: dataSourcePower,
      pivotGridDataSource: pivotGridDataSource,
      columnsPen,
      columnsPenPower,
      tabs,
      selectedIndex: 0,
      isVisible: true,
      isVisiblePower: false,
      isVisibleChart: false,
    }
  },
  components: {
    MyMonthSelector,
    DxDataGrid,
    DxSelection,
    DxExport,
    DxTabs,
    DxLoadPanel,
    DxEditing,
    DxScrolling,
    MyChartPen,
    DxPaging,
    // DxPivotGrid,
    // DxFieldChooser,
    // DxExportPivot,
  },
  methods: {
    onItemClick(e) {
      if (e.itemIndex == 0) {
        this.isVisible = true
        this.isVisibleChart = false
        this.isVisiblePower = false
      }
      if (e.itemIndex == 1) {
        this.isVisible = false
        this.isVisibleChart = true
        this.isVisiblePower = false
      }
      if (e.itemIndex == 2) {
        this.isVisible = false
        this.isVisibleChart = false
        this.isVisiblePower = true
      }
    },
    onExporting(e) {
      const workbook = new Workbook()
      const worksheet = workbook.addWorksheet('PEN')

      exportDataGrid({
        component: e.component,
        worksheet,
        autoFilterEnabled: true,
      }).then(() => {
        workbook.xlsx.writeBuffer().then((buffer) => {
          saveAs(
            new Blob([buffer], {type: 'application/octet-stream'}),
            'PEN-' +
              this.$store.state.month +
              '-' +
              this.$store.state.year +
              '.xlsx'
          )
        })
      })
      e.cancel = true
    },
    // onExportingPivot(e) {
    //   const workbook = new Workbook()
    //   const worksheet = workbook.addWorksheet('ПЭН')

    //   exportPivotGrid({
    //     component: e.component,
    //     worksheet,
    //   }).then(() => {
    //     workbook.xlsx.writeBuffer().then((buffer) => {
    //       saveAs(
    //         new Blob([buffer], {type: 'application/octet-stream'}),
    //         'ПЭН.xlsx'
    //       )
    //     })
    //   })
    //   e.cancel = true
    // },
  },
}
</script>
<style>
#divChart {
  height: 600px;
  width: 100%;
}
</style>
