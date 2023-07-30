<template>
  <v-row>
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
        :on-files-uploaded="onFilesUploaded"
      >
      </DxFileUploader>
    </v-sheet>
    <v-sheet
      class="mt-2 mx-auto py-3 px-8 rounded-lg"
      elevation="6"
      width="100%"
    >
      <ul>
        <li v-for="item in $store.state.logRequestArr" :key="item.message">
          {{ item.message }}
        </li>
      </ul>
    </v-sheet>
  </v-row>
</template>

<script>
import DxFileUploader from 'devextreme-vue/file-uploader'
import axios from '@/api/axios'
export default {
  name: 'MyFileUploader',
  components: {
    DxFileUploader,
  },
  data() {
    const url = axios.defaults.baseURL + '/FileUploader'
    return {
      //:upload-headers="headers"
      // headers: {
      //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Accept',
      //   'Access-Control-Allow-Origin': 'http://localhost',
      //   'Access-Control-Allow-Methods':
      //     'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      // },
      url,
    }
  },
  methods: {
    onUploadError(e) {
      this.$store.state.logRequestArr.push({
        message: e.file.name + ' Error: ' + e.request.responseText,
      })
    },
    onFilesUploaded(e) {
      console.log(e)
    },
    onUploaded(args) {
      let res = JSON.parse(args.request.response)
      //console.log('response=', args.request.response)
      this.$store.dispatch('calcKenPenShbmRou', {
        unit: res.unit,
        dateMin: res.dateMin,
        dateMax: res.dateMax,
      })
      // $("#progressBarStatus").removeClass("complete");

      // console.log(data_responses);
      // var garbage = $.ajax({
      //     method: 'POST',
      //     url: "..\\FileUploader\\GarbageTemp",
      //     traditional: true,
      //     //dataType: 'json',
      //     data: { text: data_responses }
      // });
      // garbage.fail(function (jqXHR, textStatus) {
      //     logRequest(jqXHR.responseText);
      //    // console.log();
      // });
      // var dates = null;
      // garbage.done(function (data) {
      //     logRequest("Обработка загруженных данных  - ОК!");
      //     dates = data;

      // }
    },
  },
}
</script>

<style></style>
