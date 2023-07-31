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
    this.$store.commit('setMonthYear', new Date())
    loadMessages(ruMessages)
    locale('ru')
  },
}
</script>

<style></style>
