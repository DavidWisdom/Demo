const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  assetsDir:'static',
  parallel:false,
  publicPath:'./',
  transpileDependencies: true
})
