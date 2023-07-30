<template>
  <DxDataGrid
    :data-source="dataSource"
    no-data-text=""
    :hoverStateEnabled="true"
    height="75vh"
    :showBorders="true"
    :focusedRowEnabled="true"
    @focusedRowChanged="onFocusedRowChanged"
  >
    <!-- <DxColumn type="buttons" buttons="[edit, delete]"></DxColumn> -->
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
import {
  DxDataGrid,
  DxColumn,
  DxEditing,
  DxSelection,
} from 'devextreme-vue/data-grid'
import DataSource from 'devextreme/data/data_source'
export default {
  name: 'MyGridStages',
  date() {
    return {
      dataSource: new DataSource(),
    }
  },
  computed: {
    // focusedRowStagesEnabled: function () {
    //   return this.$store.state.focusedRowStagesEnabled
    // },
    dataSource: function () {
      return this.$store.state.StoreStages
    },
  },
  components: {
    DxDataGrid,
    DxColumn,
    DxEditing,
    DxSelection,
  },
  methods: {
    onFocusedRowChanged(e) {
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
      this.$store.commit('setStageDates', dates)
      this.$store.state.StoreAlarms.reload()
    },
  },
  created() {
    this.$store.dispatch('setDataSourceGridStages')
  },
}
</script>

<style></style>
