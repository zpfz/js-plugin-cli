const fse = require('fs-extra')
const path = require('path')
const symbols = require('log-symbols')

const jsonConfig = {
  "name": "js-plugin-cli",
  "mirror": "https://zpfz.vercel.app/download/files/frontend/tpl/js-plugin-cli/"
}

const configPath = path.resolve(__dirname,'../config.json')

function defConfig() {
  return new Promise((resolve, reject) => {
    fse.outputJson(configPath, jsonConfig)
      .then(()=>{
        resolve(configPath)
      })
      .catch(err =>{
        console.error(err)
        reject(err)
        process.exit() 
      })
  })
}
module.exports = defConfig


