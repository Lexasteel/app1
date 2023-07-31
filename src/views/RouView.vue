<template>
  <v-container>
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
            :hoverStateEnabled="true"
            :showBorders="true"
            :focusedRowEnabled="true"
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
            <DxExport :enabled="true" :allow-export-selected-data="true" />
          </DxDataGrid>
        </v-window-item>
        <v-window-item value="140">
          <DxDataGrid
            :columns="columns140"
            :data-source="dataSource"
            no-data-text=""
            :hoverStateEnabled="true"
            :showBorders="true"
            :focusedRowEnabled="true"
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

            <DxExport :enabled="true" :allow-export-selected-data="true" />
          </DxDataGrid>
        </v-window-item>
      </v-window>
    </v-row>
  </v-container>
</template>

<script>
import MyMonthPicker from '@/components/MyMonthPicker.vue'
//import MyMonthSelector from '@/components/MyMonthSelector'
//import DxTabs from 'devextreme-vue/tabs'
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
      tab: null,
    }
  },
  components: {
    MyMonthPicker,
    //MyMonthSelector,
    DxDataGrid,
    DxSelection,
    DxExport,
    //DxTabs,
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
