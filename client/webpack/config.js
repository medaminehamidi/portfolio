const path = require('path')

const rootPath = path.resolve(__dirname, '..')

module.exports = {
  rootPath,
  srcPath: path.resolve(rootPath, 'src/index.js'),
  distPath: path.resolve(rootPath, 'dist')
}
