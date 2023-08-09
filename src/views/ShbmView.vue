<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-tabs v-model="tab">
          <v-tab v-for="unit in units" :key="unit.id">{{ unit.text }}</v-tab>
        </v-tabs>
      </v-col>
      <v-col cols="2">
        <my-month-picker @change="() => dataSource.reload()"></my-month-picker>
      </v-col>

      <v-window v-model="tab">
        <v-window-item v-for="unit in units" :key="unit.id">
          <DxDataGrid
            :columns="columnsSHBM(unit.id, unit.id)"
            :data-source="dataSource"
            no-data-text=""
            :hoverStateEnabled="true"
            :showBorders="true"
            :focusedRowEnabled="true"
            @exporting="onExporting"
            :word-wrap-enabled="true"
          >
            <DxSelection mode="single"> </DxSelection>
            <DxLoadPanel :enabled="true" />
            <DxPaging :enabled="false" />
            <DxExport :enabled="true" />
          </DxDataGrid>
        </v-window-item>
      </v-window>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'MyShbm',
}
</script>
<script setup>
import {ref} from 'vue'
import {useStore} from 'vuex'
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
import MyMonthPicker from '@/components/MyMonthPicker.vue'
import {units} from '@/components/units.js'
import axios from '@/api/axios'
import {Workbook} from 'exceljs'
import {saveAs} from 'file-saver-es'
import {exportDataGrid} from 'devextreme/excel_exporter'
import moment from 'moment'
document.title = 'ШБМ'
const dataSource = new DataSource({
  store: new CustomStore({
    key: 'datetime',
    load: () => {
      return axios
        .get('shbm', {
          params: {
            date: moment(store.state.date).format('YYYY-MM-01'),
          },
        })
        .catch((e) => {
          console.log(e)
        })
    },
  }),
})

const store = useStore()
const tab = ref(null)

function onExporting(e) {
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
        'ШБМ-' + moment(store.state.date).format('MM-YYYY') + '.xlsx'
      )
    })
  })
  e.cancel = true
}
</script>

<style></style>
