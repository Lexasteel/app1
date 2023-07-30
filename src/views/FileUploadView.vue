<template>
  <v-container>
    <v-row class="mt-0">
      <v-col class="pb-0">
        <h3 class="text-center">Загрузка фaйлов</h3>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <my-file-uploader> </my-file-uploader>
      </v-col>
      <v-col class="d-flex flex-wrap align-center">
        <v-radio-group inline hide-details="true" @click="SetEditUnit">
          <v-radio label="4" value="4" color="primary"></v-radio>
          <v-radio label="5" value="5" color="primary"></v-radio>
          <v-radio label="6" value="6" color="primary"></v-radio>
          <v-radio label="7" value="7" color="primary"></v-radio>
          <v-radio label="8" value="8" color="primary"></v-radio>
          <v-radio label="9" value="9" color="primary"></v-radio>
        </v-radio-group>
        <DxDateBox
          class="ma-3 w-25"
          v-model:value="now"
          type="date"
          @value-changed="DateBoxEditValueChanged"
        ></DxDateBox>

        <v-btn class="ma-3" @click="btnRecalc"> Recalc</v-btn>
        <v-btn class="ma-3" @click="btnCheckData"> Check</v-btn>
        <v-btn class="ma-3" @click="btnSubmit"> Submit</v-btn>
        <my-grid-edit></my-grid-edit>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MyFileUploader from '@/components/MyFileUploader.vue'
import MyGridEdit from '@/components/MyGridEdit.vue'
import DxDateBox from 'devextreme-vue/date-box'

export default {
  name: 'MyUpload',
  data() {
    return {
      now: new Date(),
      units: [],
      count: 0,

      // units: ['Блок 4', 'Блок 5', 'Блок 6', 'Блок 7', 'Блок 8', 'Блок 9'],
    }
  },
  components: {
    MyFileUploader,
    DxDateBox,
    MyGridEdit,
  },
  actions: {},
  methods: {
    DateBoxEditValueChanged(e) {
      let month = e.value.getMonth() + 1
      if (e.value.getMonth() < 10) {
        month = '0' + month
      }
      let day = e.value.getDate()
      if (e.value.getDate() < 10) {
        day = '0' + day
      }
      this.$store.commit(
        'setEditDate',
        e.value.getFullYear() + '-' + month + '-' + day + 'T00:00:00'
      )
    },
    SetEditUnit(event) {
      this.$store.commit('setEditUnit', event.target.value)
    },
    btnRecalc() {
      let d = new Date()
      let month = d.getMonth() + 1
      if (d.getMonth() < 10) {
        month = '0' + month
      }
      //let day = d.getDate()
      //if (d.getDate() < 10) {
      //  day = '0' + day
      //}
      this.$store.dispatch('Recalc', {
        date: d.getFullYear() + '-' + month + '-01T00:00:00',
      })
    },
    btnCheckData() {
      let d = new Date()
      let month = d.getMonth() + 1
      if (d.getMonth() < 10) {
        month = '0' + month
      }
      this.$store.dispatch('CheckData', {
        date: d.getFullYear() + '-' + month + '-01T00:00:00',
      })
    },
    btnSubmit() {
      this.$store.dispatch('setDataSourceGridEdit')
      //this.$store.state.StoreEdit.reload()
    },
  },
}
</script>

<style></style>
