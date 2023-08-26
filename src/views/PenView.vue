<template>
  <v-row no-gutters class="d-flex justify-center">
    <v-col>
      <v-tabs v-model="tabParent">
        <v-tab value="1">Наработка</v-tab>
        <v-tab value="2">Потребление Э/Э</v-tab>
        <v-tab value="3">Графики</v-tab>
      </v-tabs>
    </v-col>
  </v-row>
  <v-row>
    <v-window v-model="tabParent">
      <v-window-item value="1">
        <v-row>
          <v-col>
            <v-tabs v-model="tabChild">
              <v-tab v-for="unit in units" :key="unit.id">{{
                unit.text
              }}</v-tab>
            </v-tabs>
          </v-col>
          <v-col cols="2">
            <my-month-picker
              @change="() => dataSource.reload()"
            ></my-month-picker>
          </v-col>
        </v-row>
        <v-window v-model="tabChild">
          <v-window-item v-for="unit in units" :key="unit.id">
            <DxDataGrid
              :columns="columnsPen(unit.id, unit.id)"
              :data-source="dataSource"
              no-data-text=""
              :showBorders="true"
              :word-wrap-enabled="true"
              @exporting="onExporting"
              :column-min-width="70"
              height="75vh"
            >
              <DxSelection mode="single"> </DxSelection>
              <DxLoadPanel :enabled="true" />
              <DxPaging :enabled="false" />
              <DxExport :enabled="true" />
            </DxDataGrid>
          </v-window-item>
        </v-window>
      </v-window-item>
      <v-window-item value="2">
        <DxDataGrid
          :columns="columnsPower(0, 0)"
          :data-source="dataSourcePower"
          no-data-text=""
          :showBorders="true"
          :word-wrap-enabled="true"
          @exporting="onExporting"
          :show-column-lines="true"
          height="83vh"
          width="1482px"
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
          <DxExport :enabled="true" />
        </DxDataGrid>
      </v-window-item>
      <v-window-item value="3">
        <div class="d-flex flex-column">
          <MyChartPen></MyChartPen>
        </div>
      </v-window-item>
    </v-window>
  </v-row>
</template>

<script>
export default {
  name: 'MyPen',
}
</script>

<script setup>
import {ref} from 'vue'
import {useStore} from 'vuex'
import {units} from '@/components/units'
import MyMonthPicker from '@/components/MyMonthPicker'
import DataSource from 'devextreme/data/data_source'
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
import {columnsPen, columnsPower} from '@/components/ColumnsPen.js'
import axios from '@/api/axios'
import {Workbook} from 'exceljs'
import {saveAs} from 'file-saver-es'
import {exportDataGrid} from 'devextreme/excel_exporter'
import MyChartPen from '@/components/MyChartPen'
import moment from 'moment'
document.title = 'ПЭН'
const store = useStore()
const tabParent = ref(null)
const tabChild = ref(null)

const dataSource = new DataSource({
  store: new CustomStore({
    key: 'datetime',
    load: () => {
      return axios
        .get('devices', {
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

const dataSourcePower = new DataSource({
  store: new CustomStore({
    key: 'datetime',
    load: () => {
      return axios.get('devices/pens', {
        params: {
          date: moment(store.state.date).format('YYYY-MM-01'),
        },
      })
    },
    update: (key, values) => {
      // console.log('key=', key, 'val=', values)
      return axios
        .put('devices/pens', {
          id: key,
          values: values,
        })
        .catch((e) => {
          console.log(e)
        })
    },
  }),
})

function onExporting(e) {
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
        'PEN-' + moment(store.state.date).format('MM-YYYY') + '.xlsx'
      )
    })
  })
  e.cancel = true
}
</script>
<style></style>
