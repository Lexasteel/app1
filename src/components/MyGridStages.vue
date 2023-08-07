<template>
  <DxDataGrid
    no-data-text=""
    :hoverStateEnabled="true"
    height="75vh"
    :showBorders="true"
    :focusedRowEnabled="true"
    @focusedRowChanged="onFocusedRowChanged"
  >
    <DxColumn dataField="id" :visible="false"> </DxColumn>
    <DxColumn dataField="unit" :visible="false"> </DxColumn>
    <DxColumn
      data-field="stage4"
      data-type="datetime"
      caption="Дата пуск"
      alignment="center"
      width="50%"
      format="dd.MM.yy HH:mm"
    >
    </DxColumn>
    <DxColumn
      data-field="stage5"
      data-type="datetime"
      caption="Дата останов"
      alignment="center"
      width="50%"
      format="dd.MM.yy HH:mm"
    >
    </DxColumn>
    <DxColumn dataField="Number" :visible="false"> </DxColumn>
    <DxEditing
      refresh-mode="full"
      mode="row"
      :allow-adding="true"
      :allow-pdating="true"
      :allow-deleting="true"
    ></DxEditing>
    <DxSelection mode="single"> </DxSelection>
  </DxDataGrid>
</template>
<script>
export default {
  name: 'MyGridStages',
}
</script>
<script setup>
import {useStore} from 'vuex'
import {
  DxDataGrid,
  DxColumn,
  DxEditing,
  DxSelection,
} from 'devextreme-vue/data-grid'
const store = useStore()
//eslint-disable-next-line
const emit = defineEmits(['focusedChangedStages'])
function onFocusedRowChanged(e) {
  if (e.rowIndex == -1) return
  let dates = {
    stage4Date: e.row.data.stage4,
    stage5Date: e.row.data.stage5,
  }
  if (!e.row.data.stage4) {
    dates.stage4Date = 0
  }
  if (!e.row.data.stage5) {
    dates.stage5Date = 0
  }
  store.commit('setStageDates', dates)
  emit('focusedChangedStages')
}
</script>

<style></style>
