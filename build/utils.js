'use strict'

const path = require('path')
const notifier = require('node-notifier')
const checkport = require('requires-port')
const packageConfig = require('../package.json')

module.exports = {
  resolve: (dir) => {
    return path.join(__dirname, '..', dir)
  },

  assetsPath: (_path) => {
    const assetsSubDirectory = 'static'
    return path.posix.join(assetsSubDirectory, _path)
  },

  jsPath: (_path) => {
    const assetsSubDirectory = 'js'
    return path.posix.join(assetsSubDirectory, _path)
  },

  createNotifierCallback: () => {
  
    return (severity, errors) => {
      if (severity !== 'error') return
  
      const error = errors[0]
      const filename = error.file && error.file.split('!').pop()
  
      notifier.notify({
        title: packageConfig.name,
        message: severity + ': ' + error.name,
        subtitle: filename || '',
        icon: path.join(__dirname, 'static', 'img', 'logo.png')
      })
    }
  },

  getFreePort: (port = 8080) => {
    for (let i = port; ; i++) {
      if (checkport(port, 'http')) {
        return port
      }
    }
  },

  setPath: (folderName) => {
    return path.posix.join(__dirname, folderName);
  }
}
