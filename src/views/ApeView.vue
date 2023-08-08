<template>
  <v-container fluid>
    <v-row>
      <v-col md="3">
        <my-month-picker
          @change="() => dataSourceStages.reload()"
        ></my-month-picker>
        <my-grid-stages
          :data-source="dataSourceStages"
          @focused-changed-stages="() => dataSourceAlarms.reload()"
        ></my-grid-stages>
      </v-col>
      <v-col md="9" inline>
        <h3 pb="2" style="text-align: center">Анализ пусков энергоблоков</h3>
        <v-sheet
          class="my-3 pa-1 rounded-lg"
          elevation="6"
          width="100%"
          style="background-color: #f7f7f7"
        >
          <DxTabs
            :data-source="dataSource"
            :selected-index="store.state.unit - 3"
            @item-click="onItemClick"
          ></DxTabs>
        </v-sheet>

        <my-grid-alarms :data-source="dataSourceAlarms"> </my-grid-alarms>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'MyApe',
}
</script>
<script setup>
import {ref} from 'vue'
import {useStore} from 'vuex'
import MyMonthPicker from '@/components/MyMonthPicker.vue'
import MyGridStages from '@/components/MyGridStages.vue'
import MyGridAlarms from '@/components/MyGridAlarms.vue'
import DxTabs from 'devextreme-vue/tabs'
import axios from '@/api/axios'
import CustomStore from 'devextreme/data/custom_store'
import DataSource from 'devextreme/data/data_source'
import moment from 'moment'
document.title = 'ПУСКИ'
const store = useStore()

const dataSource = ref(
  new DataSource({
    store: new CustomStore({
      key: 'id',
      load: () => {
        return axios.get('stages/last').catch((e) => {
          console.log(e)
        })
      },
    }),
  })
)

const dataSourceStages = ref(
  new DataSource({
    store: new CustomStore({
      key: 'id',
      load: () => {
        return axios
          .get('/stages', {
            params: {
              unit: store.state.unit,
              month: moment(store.state.date).format('MM'),
              year: moment(store.state.date).format('YYYY'),
            },
          })
          .catch((e) => {
            console.log(e)
          })
      },
      insert: (values) => {
        if (values.stage4 == undefined) values.stage4 = ''
        if (values.stage5 == undefined) values.stage5 = ''
        return axios.post('/stages', {
          unit: store.state.unit,
          id: '0',
          stage4: values.stage4,
          stage5: values.stage5,
        })
      },
      remove: (key) => {
        // console.log('key=', key, 'val=', values)
        return axios
          .delete('/stages', {
            params: {
              id: key,
            },
          })
          .catch((e) => {
            console.log(e)
          })
      },
    }),
  })
)
const dataSourceAlarms = ref(
  new DataSource({
    store: new CustomStore({
      key: 'id',
      load: () => {
        return axios
          .get('ape/getalarms', {
            params: {
              unit: store.state.unit,
              dateStart: store.state.stage4Date,
              dateEnd: store.state.stage5Date,
            },
          })
          .catch((e) => {
            console.log(e)
          })
      },
    }),
  })
)

function onItemClick(e) {
  store.commit('setUnit', Number(e.itemData.id))
  dataSourceStages.value.reload()
}
</script>

<style></style>
