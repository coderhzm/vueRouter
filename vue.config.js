module.exports = {
  //关闭Eslint
  lintOnSave: false,
  //路径别名
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'commponent': '@/components',
        'network': '@/network',
        'views': '@/views'
      }
    }
  }
}