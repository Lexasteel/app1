<template>
  <DxDataGrid
    :show-columnLines="true"
    :word-wWrap-enabled="true"
    no-data-text=""
    @row-prepared="onRowPrepared"
  >
    <DxColumn
      name="beginDate"
      dataField="beginTime"
      caption="Дата"
      width="10%"
      dataType="date"
      format="dd.MM.yy"
      alignment="center"
      sortOrder="asc"
    ></DxColumn>
    <DxColumn
      name="beginTime"
      dataField="beginTime"
      dataType="date"
      caption="Начало"
      width="10%"
      format="HH:mm"
      alignment="center"
    ></DxColumn>
    <DxColumn
      dataField="endTime"
      dataType="date"
      caption="Окончание"
      width="10%"
      format="HH:mm"
      alignment="center"
    ></DxColumn>
    <DxColumn
      dataField="interval"
      caption="Продолжительность"
      width="15%"
      alignment="center"
    ></DxColumn>
    <DxColumn dataField="name" caption="Параметр" width="40%"></DxColumn>
    <DxColumn
      dataField="deviation"
      caption="Факт.скорость/Значение"
      width="15%"
    ></DxColumn>
    <DxColumn dataField="normaStr" caption="Норматив" width="10%"></DxColumn>
    <DxColumn dataField="id" :visible="false"></DxColumn>
    <DxColumn dataField="criterion" :visible="false"></DxColumn>
    <DxColumn dataField="addInfo" :visible="false"></DxColumn>
    <DxColumn dataField="unit" :visible="false"></DxColumn>
    <DxColumn dataField="etap" :visible="false"></DxColumn>
    <DxColumn type="buttons" width="5%">
      <DxButton
        hint="Тренд"
        icon="image"
        :visible="true"
        @click="chartShow"
      ></DxButton>
    </DxColumn>
    <DxEditing></DxEditing>
    <DxSelection mode="single"></DxSelection>
    <DxLoadPanel :enabled="true" />
  </DxDataGrid>
</template>
<script>
export default {
  name: 'MyGridAlarms',
}
</script>

<script setup>
import {
  DxDataGrid,
  DxColumn,
  DxEditing,
  DxSelection,
  DxButton,
  DxLoadPanel,
} from 'devextreme-vue/data-grid'
const chartShow = () => {
  console.log('press charShow!')
}
const onRowPrepared = (info) => {
  if (info.rowType == 'data' && info.data.deviation != null) {
    //        console.log('cls')
    info.rowElement.className += ' row-alarm'
  }
  if (info.rowType == 'data' && info.data.criterion == 0) {
    //        console.log(info)
    info.rowElement.className += ' row-alarm-bold'
  }
}
</script>

<style></style>
