import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.material.orange.light.compact.css'
import '@/assets/global.css'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//import vuetify from './plugins/vuetify'
//import {loadFonts} from './plugins/webfontloader'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import {createVuetify} from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vue.prototype.$http = axios;

const vuetify = createVuetify({
  components,
  directives,
  ssr: true,
})

//loadFonts()

createApp(App).use(router).use(store).use(vuetify).mount('#app')
