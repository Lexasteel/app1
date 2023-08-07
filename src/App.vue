<template>
  <v-app>
    <my-app-bar> </my-app-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import MyAppBar from '@/components/MyAppBar.vue'

import ruMessages from 'devextreme/localization/messages/ru.json'

import {locale, loadMessages} from 'devextreme/localization'

export default {
  name: 'App',
  components: {
    MyAppBar,
  },
  data() {
    return {}
  },
  created() {
    //console.log('created App')
    // if (this.$store.year == undefined) {
    //   this.$store.commit('setMonthYear', new Date())
    // }
    //this.$store.commit('setUnit', 5)

    if (this.$store.unit == undefined) {
      this.$store.commit('setUnit', 5)
    }
    //console.log('created this.$store.unit: ', this.$store.unit)

    loadMessages(ruMessages)
    locale('ru')
  },
  mounted() {
    document.title = 'Пуски энергоблоков'
    //console.log('mounted App')
    //console.log('mounted this.$store.unit: ', this.$store.unit)
  },
}
</script>

<style></style>
