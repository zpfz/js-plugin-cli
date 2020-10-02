const symbols = require('log-symbols')
const path = require('path')
const fse = require('fs-extra')
const defConfig = require('./config')

const cfgPath = path.resolve(__dirname, '../config.json')


async function setMirror(link) {
  const exists = await fse.pathExists(cfgPath)
  if (exists) {
    mirrorAction(link)
  } else {
    defConfig().then(()=>{
      mirrorAction(link)
    })
  }
}

async function mirrorAction(link) {
  try {
    const jsonConfig = await fse.readJson(cfgPath)
    jsonConfig.mirror = link
    await fse.writeJson(cfgPath, jsonConfig)
    console.log(symbols.success, 'Set the mirror successful.')
  } catch (err) {
    console.log(symbols.error, err)
    process.exit()
  }
}

module.exports = setMirror


