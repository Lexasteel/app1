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
import {ref} from 'vue'
const dataSource = ref(null)
//eslint-disable-next-line
defineExpose({
  dataSource,
})
</script>

<style></style>
