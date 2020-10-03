const fse = require('fs-extra')
const path = require('path')

const jsonConfig = {
  "name": "js-plugin-cli",
  "mirror": "https://zpfz.vercel.app/download/files/frontend/tpl/js-plugin-cli/"
}

const configPath = path.resolve(__dirname,'../config.json')

async function defConfig() {
  try {
    await fse.outputJson(configPath, jsonConfig)
  } catch (err) {
    console.error(err)
    process.exit()
  }
}

module.exports = defConfig
