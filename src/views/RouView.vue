<template>
  <v-container>
    <v-row>
      <my-month-selector class="mt-2" v-bind="{dataSource}">
      </my-month-selector>
    </v-row>
    <v-row>
      <dxTabs
        class="mt-3"
        :data-source="tabs"
        :selected-index="selectedIndex"
        @item-click="onItemClick"
      >
      </dxTabs>
    </v-row>
    <v-row>
      <!--ROU24-->
      <DxDataGrid
        class="mt-3"
        :columns="columns24"
        :data-source="dataSource"
        no-data-text=""
        :hoverStateEnabled="true"
        width="87vw"
        :showBorders="true"
        :focusedRowEnabled="true"
        :word-wrap-enabled="true"
        @exporting="onExporting"
        :visible="isVisible24"
        :show-column-lines="true"
      >
        <DxEditing
          :allow-updating="true"
          mode="batch"
          :select-text-on-edit-start="true"
          start-edit-action="dblClick"
        />
        <DxSelection mode="single"></DxSelection>
        <DxLoadPanel :enabled="true" />
        <DxExport :enabled="true" :allow-export-selected-data="true" />
      </DxDataGrid>
      <!--ROU140-->
      <DxDataGrid
        class="mt-3"
        :columns="columns140"
        :data-source="dataSource"
        no-data-text=""
        :hoverStateEnabled="true"
        width="87vw"
        :showBorders="true"
        :focusedRowEnabled="true"
        :word-wrap-enabled="true"
        @exporting="onExporting"
        :visible="!isVisible24"
        :show-column-lines="true"
      >
        <DxEditing
          :allow-updating="true"
          mode="batch"
          :select-text-on-edit-start="true"
          start-edit-action="dblClick"
        />
        <DxSelection mode="single"></DxSelection>
        <DxLoadPanel :enabled="true" />

        <DxExport :enabled="true" :allow-export-selected-data="true" />
      </DxDataGrid>
    </v-row>
  </v-container>
</template>

<script>
import MyMonthSelector from '@/components/MyMonthSelector'
import DxTabs from 'devextreme-vue/tabs'
import DataSource from 'devextreme/data/data_source'
import CustomStore from 'devextreme/data/custom_store'
import {
  DxDataGrid,
  DxSelection,
  DxExport,
  DxLoadPanel,
  DxEditing,
} from 'devextreme-vue/data-grid'
import {columns24} from '@/components/ColumnsRou.js'
import {columns140} from '@/components/ColumnsRou.js'
import {tabs} from '@/components/ColumnsRou.js'
import axios from '@/api/axios'
import {Workbook} from 'exceljs'
import {saveAs} from 'file-saver-es'
import {exportDataGrid} from 'devextreme/excel_exporter'
export default {
  name: 'MyROU',
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
            .get('rous', {
              params: {date: d},
            })
            .catch((e) => {
              console.log(e)
            })
        },
        update: (key, values) => {
          // console.log('key=', key, 'val=', values)
          return axios
            .put('/rous', {
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
      columns24,
      columns140,
      tabs,
      selectedIndex: 0,
      isVisible24: true,
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
  },
  methods: {
    onItemClick() {
      this.isVisible24 = !this.isVisible24
    },
    onExporting(e) {
      const workbook = new Workbook()
      const worksheet = workbook.addWorksheet('ROU')

      exportDataGrid({
        component: e.component,
        worksheet,
        autoFilterEnabled: true,
      }).then(() => {
        workbook.xlsx.writeBuffer().then((buffer) => {
          saveAs(
            new Blob([buffer], {type: 'application/octet-stream'}),
            'ROU-' +
              this.$store.state.month +
              '-' +
              this.$store.state.year +
              '.xlsx'
          )
        })
      })
      e.cancel = true
    },
  },
}
</script>
