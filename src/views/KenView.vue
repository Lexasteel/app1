<template>
  <v-container fluid>
    <v-row>
      <my-month-selector class="mt-2" v-bind="{dataSource}">
      </my-month-selector>
    </v-row>

    <v-row>
      <DxDataGrid
        class="mt-3"
        :columns="columnsKen"
        :data-source="dataSource"
        no-data-text=""
        :hoverStateEnabled="true"
        width="97vw"
        :showBorders="true"
        :focusedRowEnabled="true"
        :word-wrap-enabled="true"
        @exporting="onExporting"
      >
        <DxSelection mode="single"> </DxSelection>
        <DxLoadPanel :enabled="true" />
        <DxPaging :enabled="false" />
        <DxExport :enabled="true" :allow-export-selected-data="true" />
      </DxDataGrid>
      <!-- <MyChartPen :visible="isVisibleChart"></MyChartPen> -->
    </v-row>
  </v-container>
</template>
<script>
import MyMonthSelector from '@/components/MyMonthSelector'
import DataSource from 'devextreme/data/data_source'
import CustomStore from 'devextreme/data/custom_store'
import {
  DxDataGrid,
  DxSelection,
  DxExport,
  DxLoadPanel,
  DxPaging,
} from 'devextreme-vue/data-grid'
import {columnsKen} from '@/components/ColumnsKen.js'
import axios from '@/api/axios'
import {Workbook} from 'exceljs'
import {saveAs} from 'file-saver-es'
import {exportDataGrid} from 'devextreme/excel_exporter'
export default {
  name: 'MyPen',
  data() {
    const dataSource = new DataSource({
      store: new CustomStore({
        key: 'dateTime',
        load: () => {
          const year = this.$store.state.year
          const month = this.$store.state.month
          const d = year
            .toString()
            .concat('-', month.toString(), '-01T00:00:00')

          return axios
            .get('kens', {
              params: {date: d},
            })
            .catch((e) => {
              console.log(e)
            })
        },
      }),
    })
    return {
      dataSource: dataSource,
      columnsKen,
    }
  },
  components: {
    MyMonthSelector,
    DxDataGrid,
    DxSelection,
    DxExport,
    DxLoadPanel,
    DxPaging,
  },

  methods: {
    onExporting(e) {
      const workbook = new Workbook()
      const worksheet = workbook.addWorksheet('KEN')

      exportDataGrid({
        component: e.component,
        worksheet,
        autoFilterEnabled: true,
      }).then(() => {
        workbook.xlsx.writeBuffer().then((buffer) => {
          saveAs(
            new Blob([buffer], {type: 'application/octet-stream'}),
            'KEN-' +
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
