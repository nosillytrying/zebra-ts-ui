const path = require('path')

const resolve = (filePath) => path.join(__dirname, './', filePath)

module.exports = {
  outputDir: 'docs',
  publicPath: '/zebra-ts-ui/',
  pages: {
    index: {
      entry: resolve('examples/main.ts'),
      template: 'public/index.html',
      filename: 'index.html',
      title: 'zebra-ui'
    }
  },
  chainWebpack: (config) => {
    config.plugins
      .delete('prefetch-index')
      .delete('preload-index')
    config.resolve.alias
      .set('examples', resolve('examples'))
      .set('src', resolve('src'))
  }
}
