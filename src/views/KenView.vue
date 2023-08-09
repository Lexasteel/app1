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
            :columns="columnsKen(unit.id, unit.id)"
            :data-source="dataSource"
            no-data-text=""
            :showBorders="true"
            :focusedRowEnabled="true"
            :word-wrap-enabled="true"
            @exporting="onExporting"
          >
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
  name: 'MyKen',
}
</script>
<script setup>
import {ref} from 'vue'
import {useStore} from 'vuex'
import {onBeforeMount} from 'vue'
import MyMonthPicker from '@/components/MyMonthPicker.vue'
import DataSource from 'devextreme/data/data_source'
import CustomStore from 'devextreme/data/custom_store'
import {
  DxDataGrid,
  DxExport,
  DxLoadPanel,
  DxPaging,
} from 'devextreme-vue/data-grid'
import {columnsKen} from '@/components/ColumnsKen.js'
import {units} from '@/components/units'
import axios from '@/api/axios'
import {Workbook} from 'exceljs'
import {saveAs} from 'file-saver-es'
import {exportDataGrid} from 'devextreme/excel_exporter'
import moment from 'moment'
document.title = 'КЭН'
const store = useStore()
const tab = ref(null)
const dataSource = new DataSource({
  store: new CustomStore({
    key: 'date',
    load: () => {
      return axios
        .get('kens', {
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
onBeforeMount(() => {})
function onExporting(e) {
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
        'KEN-' + moment(store.state.date).format('MM-YYYY') + '.xlsx'
      )
    })
  })
  e.cancel = true
}
</script>
