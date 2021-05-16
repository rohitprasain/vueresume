module.exports = {
   publicPath: process.env.NODE_ENV === 'production'
    ? '/vueresume/'
    : '/',
  pluginOptions: {
    quasar: {
      importStrategy: 'kebab',
      rtlSupport: false
    }
  },
  transpileDependencies: [
    'quasar'
  ]
}

