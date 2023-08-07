<template>
  <v-container>
    <v-row>
      <v-col cols="5">
        <my-file-uploader
          @uploaded="(res) => res.forEach((element) => modelLog.push(element))"
        >
        </my-file-uploader>

        <v-sheet
          class="mt-2 mx-auto py-3 px-8 rounded-lg"
          elevation="6"
          width="100%"
        >
          <v-progress-linear
            :indeterminate="loading"
            color="primary"
            height="10"
            rounded
          ></v-progress-linear>
          <ul>
            <li v-for="item in modelLog" :key="item">
              {{ item }}
            </li>
          </ul>
        </v-sheet>
      </v-col>
      <v-col>
        <v-row>
          <v-col>
            <v-radio-group
              inline
              v-model="modelUnits"
              @update:model-value="updateUnit"
              hide-details="true"
            >
              <template v-for="unit in unitsRadio" :key="unit">
                <v-radio
                  :label="unit + ''"
                  :value="unit"
                  color="primary"
                ></v-radio>
              </template>
            </v-radio-group>
          </v-col>
          <v-col cols="3" class="d-flex align-items:center">
            <Datepicker
              v-model="date"
              @update:model-value="setDate"
              auto-apply
              locale="uk"
              :clearable="false"
              format="dd.MM.yyyy"
            />
          </v-col>
          <v-col cols="2">
            <v-btn @click="btnSubmit"> Submit</v-btn>
          </v-col>
        </v-row>
        <v-btn class="ma-3" @click="btnRecalc"> Recalc</v-btn>
        <v-btn class="ma-3" @click="btnCheckData"> Check</v-btn>

        <my-grid-edit ref="myGridEditref"></my-grid-edit>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  name: 'MyUpload',
}
</script>

<script setup>
import MyFileUploader from '@/components/MyFileUploader.vue'
import MyGridEdit from '@/components/MyGridEdit.vue'
import Datepicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import {useStore} from 'vuex'
import moment from 'moment'
import {ref} from 'vue'
import axios from '@/api/axios'
document.title = 'Загрузка'
const store = useStore()
const modelUnits = ref(store.state.unit)
const unitsRadio = [4, 5, 6, 7, 8, 9]
const modelLog = ref([])
const loading = ref(false)
const date = ref(store.state.date)
const myGridEditref = ref()
const updateUnit = (modelValue) => {
  store.commit('setUnit', modelValue)
}
const setDate = (modelData) => {
  store.commit('setDate', modelData)
}
const btnRecalc = async () => {
  loading.value = true
  modelLog.value.push(
    'Recalc data from ' +
      moment(store.state.date).format('YYYY-MM-DDTHH:mm:ss .....')
  )
  try {
    const resp = await axios.get('/FIleUploader/Recalc', {
      params: {
        date: moment(store.state.date).format('YYYY-MM-DDT00:00:00'),
      },
    })
    modelLog.value.push(moment().format('HH:mm:ss ') + resp.data)
    //console.log('get')
  } catch (e) {
    modelLog.value.push(moment().format('HH:mm:ss ') + 'Recalc error: ' + e)
  }
  loading.value = false
}
const btnCheckData = async () => {
  loading.value = true
  modelLog.value.push(
    'Check data from ' +
      moment(store.state.date).format('YYYY-MM-DDTHH:mm:ss .....')
  )
  try {
    const resp = await axios.get('/FIleUploader/CheckData', {
      params: {
        date: moment(store.state.date).format('YYYY-MM-DDT00:00:00'),
      },
    })
    modelLog.value.push(resp.data)
  } catch (e) {
    modelLog.value.push(moment().format('HH:mm:ss ') + 'Check data error:' + e)
  }
  loading.value = false
}
function btnSubmit() {
  myGridEditref.value.dataSource.reload()
}
</script>

<style></style>
