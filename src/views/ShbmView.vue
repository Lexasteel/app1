<template>
  <v-container fluid>
    <v-row>
      <my-month-selector class="mt-2" v-bind="{dataSource}">
      </my-month-selector>
    </v-row>
    <v-row>
      <DxDataGrid
        class="mt-3"
        :columns="columnsSHBM"
        :data-source="dataSource"
        no-data-text=""
        :hoverStateEnabled="true"
        width="97vw"
        :showBorders="true"
        :focusedRowEnabled="true"
        @exporting="onExporting"
        :word-wrap-enabled="true"
      >
        <DxSelection mode="single"> </DxSelection>
        <DxLoadPanel :enabled="true" />
        <DxPaging :enabled="false" />
        <DxExport :enabled="true" :allow-export-selected-data="true" />
      </DxDataGrid>
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
import {columnsSHBM} from '@/components/ColumnsShbm.js'
import axios from '@/api/axios'
import {Workbook} from 'exceljs'
import {saveAs} from 'file-saver-es'
import {exportDataGrid} from 'devextreme/excel_exporter'
export default {
  name: 'MyShbm',
  data() {
    const dataSource = new DataSource({
      store: new CustomStore({
        key: 'id',
        load: () => {
          const year = this.$store.state.year
          const month = this.$store.state.month
          this.d = year.toString().concat('-', month.toString(), '-01T00:00:00')
          return axios
            .get('shbm', {
              params: {date: this.d},
            })
            .catch((e) => {
              console.log(e)
            })
        },
      }),
    })
    return {
      dataSource: dataSource,
      columnsSHBM,
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
  beforeCreate() {
    // console.log('beforeshbm', this.year)
  },
  created() {
    // console.log('createdshbm', this.d)
  },
  mounted() {},
  methods: {
    OnValueChanged() {
      this.dataSource.reload()
    },
    onExporting(e) {
      const workbook = new Workbook()
      const worksheet = workbook.addWorksheet('ШБМ')

      exportDataGrid({
        component: e.component,
        worksheet,
        autoFilterEnabled: true,
      }).then(() => {
        workbook.xlsx.writeBuffer().then((buffer) => {
          saveAs(
            new Blob([buffer], {type: 'application/octet-stream'}),
            'ШБМ-' + this.month + '-' + this.year + '.xlsx'
          )
        })
      })
      e.cancel = true
    },
  },
}
</script>

<style></style>
