<template>
  <v-sheet
    class="mx-auto mb-2 pa-1 rounded-lg"
    elevation="6"
    style="background-color: #f7f7f7"
  >
    <DxDateBox
      v-model:value="dateBoxValue"
      type="date"
      display-format="monthAndYear"
      styling-mode="underlined"
      :calendar-options="coptions"
      @value-changed="DxDateBoxOnValueChanged"
      class="month"
    ></DxDateBox>
  </v-sheet>
</template>

<script>
import DxDateBox from 'devextreme-vue/date-box'
export default {
  name: 'MyMonthSelector',
  components: {
    DxDateBox,
  },
  props: {
    dataSource: Object,
  },
  data() {
    return {
      dateBoxValue: new Date(
        this.$store.state.year,
        this.$store.state.month - 1,
        1
      ),
      coptions: {
        maxZoomLevel: 'year',
      },
    }
  },
  methods: {
    DxDateBoxOnValueChanged(e) {
      let name = this.$route.name
      this.$store.commit('setMonthYear', e.value)
      if (name == 'ape') {
        this.$store.state.StoreStages.reload()
      } else {
        this.dataSource.reload()
      }
    },
  },
  beforeCreate() {},
}
</script>

<style></style>
