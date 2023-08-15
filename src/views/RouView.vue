<template>
  <v-row no-gutters>
    <v-col>
      <v-tabs v-model="tab">
        <v-tab value="24">{{ tabs[0].text }}</v-tab>
        <v-tab value="140">{{ tabs[1].text }}</v-tab>
      </v-tabs>
    </v-col>
    <v-col cols="2">
      <my-month-picker @change="() => dataSource.reload()"></my-month-picker>
    </v-col>

    <v-window v-model="tab">
      <v-window-item value="24">
        <DxDataGrid
          :columns="columns24"
          :data-source="dataSource"
          no-data-text=""
          :showBorders="true"
          :word-wrap-enabled="true"
          @exporting="onExporting"
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
          <DxPaging :enabled="false" />
          <DxExport :enabled="true" :allow-export-selected-data="true" />
        </DxDataGrid>
      </v-window-item>
      <v-window-item value="140">
        <DxDataGrid
          :columns="columns140"
          :data-source="dataSource"
          no-data-text=""
          :showBorders="true"
          :word-wrap-enabled="true"
          @exporting="onExporting"
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
          <DxPaging :enabled="false" />
          <DxExport :enabled="true" :allow-export-selected-data="true" />
        </DxDataGrid>
      </v-window-item>
    </v-window>
  </v-row>
</template>
<script>
export default {
  name: 'MyROU',
}
</script>
<script setup>
import {ref} from 'vue'
import {useStore} from 'vuex'
import MyMonthPicker from '@/components/MyMonthPicker.vue'
import DataSource from 'devextreme/data/data_source'
import CustomStore from 'devextreme/data/custom_store'
import {
  DxDataGrid,
  DxSelection,
  DxExport,
  DxLoadPanel,
  DxEditing,
  DxPaging,
} from 'devextreme-vue/data-grid'
import {columns24, columns140, tabs} from '@/components/ColumnsRou.js'
import axios from '@/api/axios'
import {Workbook} from 'exceljs'
import {saveAs} from 'file-saver-es'
import {exportDataGrid} from 'devextreme/excel_exporter'
import moment from 'moment'
document.title = 'РОУ'
const dataSource = new DataSource({
  store: new CustomStore({
    key: 'id',
    load: () => {
      return axios
        .get('rous', {
          params: {
            date: moment(store.state.date).format('YYYY-MM-01'),
          },
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

const store = useStore()
const tab = ref(null)

const onExporting = (e) => {
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
        'ROU-' + moment(store.state.date).format('MM-YYYY') + '.xlsx'
      )
    })
  })
  e.cancel = true
}
</script>
