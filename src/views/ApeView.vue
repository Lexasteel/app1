<template>
  <v-container fluid>
    <v-row>
      <v-col md="3">
        <my-month-selector> </my-month-selector>
        <my-grid-stages></my-grid-stages>
      </v-col>
      <v-col md="9" inline>
        <h3 pb="2" style="text-align: center">Анализ пусков энергоблоков</h3>
        <v-sheet
          class="my-3 pa-1 rounded-lg"
          elevation="12"
          width="100%"
          style="background-color: #f7f7f7"
        >
          <DxTabs :data-source="dataSource" @item-click="onItemClick"></DxTabs>
        </v-sheet>

        <my-grid-alarms> </my-grid-alarms>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MyMonthSelector from '@/components/MyMonthSelector.vue'
import MyGridStages from '@/components/MyGridStages.vue'
import MyGridAlarms from '@/components/MyGridAlarms.vue'
import DxTabs from 'devextreme-vue/tabs'
import axios from '@/api/axios'
import CustomStore from 'devextreme/data/custom_store'
import DataSource from 'devextreme/data/data_source'

export default {
  name: 'MyApe',
  components: {
    MyMonthSelector,
    MyGridStages,
    MyGridAlarms,
    DxTabs,
  },
  data() {
    const dataSource = new DataSource({
      store: new CustomStore({
        key: 'id',
        load: () => {
          return axios.get('stages/last').catch((e) => {
            console.log(e)
          })
        },
      }),
    })
    return {
      dataSource: dataSource,
    }
  },

  methods: {
    onItemClick(e) {
      this.$store.commit('setUnit', e.itemData.id)
      this.$store.state.StoreStages.reload()
    },
  },
}
</script>

<style></style>
