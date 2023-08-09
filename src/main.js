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
import {md3} from 'vuetify/blueprints'

// Vue.prototype.$http = axios;

const myCustomLightTheme = {
  dark: false,
  colors: {
    background: '#EADDFF',
    'background-bar': '##625B71',
    primary: '#6750a4',
    secondary: '#b4b0bb',
    tertiary: '#7d5260',
    error: '#b3261e',
    surface: '#fffbfe',
    // surface: '#FFFFFF',
    // primary: '#6200EE',
    // 'primary-darken-1': '#3700B3',
    // secondary: '#03DAC6',
    // 'secondary-darken-1': '#018786',
    // error: '#B00020',
    // info: '#2196F3',
    // success: '#4CAF50',
    // warning: '#FB8C00',
  },
}

const vuetify = createVuetify({
  components,
  directives,
  ssr: true,
  blueprint: md3,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  },
})

createApp(App).use(router).use(store).use(vuetify).mount('#app')
