const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/pudps',
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
      defaultAssets: false, // <= this will disable autoloading Google font and MDI icons
    },
  },
  // css: ['~/assets/fonts/roboto.css', '~/assets/global.css'],
  // devServer: {
  //   host: 'web-kutes.local',
  // },
})
