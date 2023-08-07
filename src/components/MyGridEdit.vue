<template>
  <DxDataGrid
    :data-source="dataSource"
    :show-column-lines="true"
    :word-wrap-enabled="true"
    no-data-text=""
    :hoverStateEnabled="true"
    height="60vh"
    :show-borders="true"
  >
    <DxScrolling mode="standard" />
    <DxHeaderFilter :visible="true" />
    <DxColumn data-field="id" :visible="false"></DxColumn>
    <DxColumn
      data-field="date"
      data-type="datetime"
      caption="Дата"
      format="HH:mm"
      :allow-editing="false"
    ></DxColumn>
    <DxColumn
      caption="Генератор вкл."
      data-field="generator"
      data-type="number"
      :allow-editing="false"
    ></DxColumn>
    <DxColumn
      caption="Рег. скорости вкл."
      data-field="speed"
      data-type="number"
      :allow-editing="false"
    ></DxColumn>
    <DxColumn
      caption="ДВ-А"
      data-field="dva"
      data-type="number"
      :allow-editing="false"
    ></DxColumn>
    <DxColumn
      caption="ДВ-Б"
      data-field="dvb"
      data-type="number"
      :allow-editing="false"
    ></DxColumn>

    <DxColumn
      caption="Давление в коллекторе"
      data-field="press"
      data-type="number"
      :allow-editing="false"
    ></DxColumn>
    <DxColumn caption="Этап" data-field="stage" data-type="number"></DxColumn>
    <DxEditing
      :allow-updating="true"
      mode="batch"
      :select-text-on-edit-start="true"
      start-edit-action="dblClick"
    />
    <DxSelection mode="single"></DxSelection>
    <DxLoadPanel :enabled="true" />
    <DxPaging :enabled="false" />
  </DxDataGrid>
</template>
<script>
export default {
  name: 'MyGridEdit',
}
</script>

<script setup>
import {
  DxDataGrid,
  DxColumn,
  DxEditing,
  DxSelection,
  DxLoadPanel,
  DxHeaderFilter,
  DxScrolling,
  DxPaging,
} from 'devextreme-vue/data-grid'
import axios from '@/api/axios'
import DataSource from 'devextreme/data/data_source'
import CustomStore from 'devextreme/data/custom_store'
import moment from 'moment'
import {useStore} from 'vuex'
//import {defineExpose} from 'vue'
const store = useStore()
const dataSource = new DataSource({
  store: new CustomStore({
    key: 'id',
    load: () => {
      return axios
        .get('/fileuploader/edit', {
          params: {
            unit: store.state.unit,
            date: moment(store.state.date).format('YYYY-MM-DDT00:00:00'),
          },
        })
        .catch((e) => {
          console.log('Edit err', e)
        })
    },
    update: (key, values) => {
      // console.log('key=', key, 'val=', values)
      return axios
        .put('/fileuploader/edit', {
          id: key,
          values: values,
          unit: 0,
        })
        .catch((e) => {
          console.log('Edit update err:', e)
        })
    },
  }),
})
//eslint-disable-next-line
defineExpose({
  dataSource,
})
</script>

<style></style>
