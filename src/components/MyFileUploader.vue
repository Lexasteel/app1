<template>
  <v-sheet class="rounded-lg" elevation="12" width="100%">
    <DxFileUploader
      select-button-text="Выбрать файлы для загрузки ..."
      name="file"
      accept=".csv"
      :upload-url="url"
      :multiple="true"
      label-text="или перетяните файлы сюда"
      uploaded-message="Файл загружен."
      upload-failed-message="Файл не загружен!!!"
      @uploaded="onUploaded"
      @upload-error="onUploadError"
    >
    </DxFileUploader>
  </v-sheet>
</template>
<script>
export default {
  name: 'MyFileUploader',
}
</script>

<script setup>
import DxFileUploader from 'devextreme-vue/file-uploader'
import axios from '@/api/axios'
//import {useStore} from 'vuex'
//import {ref} from 'vue'
const url = axios.defaults.baseURL + '/FileUploader'

function onUploadError(e) {
  // this.$store.state.logRequestArr.push({
  console.log('Upload error:', e.request.responseText)
  //message: e.file.name + ' Error: ' + e.request.responseText,
}

function onUploaded(args) {
  //'{"unit":5,"dateMin":"2023-01-12T00:00:00","dateMax":"2023-01-12T00:00:00"}'
  let res = JSON.parse(args.request.response)
  axios
    .get('/FIleUploader/Recalc', {
      params: {
        date: res.dateMin,
      },
    })
    .then((response) => {
      console.log('Recalc response:', response.data)
      //state.logRequestArr.push({message: response.data})
    })
    .catch((e) => {
      console.log('Recalc error:', e)
      //state.logRequestArr.push({message: e})
    })
}
//:upload-headers="headers"
// headers: {
//   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Accept',
//   'Access-Control-Allow-Origin': 'http://localhost',
//   'Access-Control-Allow-Methods':
//     'GET, POST, PATCH, PUT, DELETE, OPTIONS',
// },
</script>

<style></style>
