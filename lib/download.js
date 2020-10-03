const download = require('download')
const ora = require('ora')
const chalk = require('chalk')
const path = require('path')
const fse = require('fs-extra')

const defConfig = require('./config')

const cfgPath = path.resolve(__dirname,'../config.json')
const tplPath = path.resolve(__dirname,'../template')

async function dlTemplate() {
  const exists = await fse.pathExists(cfgPath)
  if (exists){
    await dlAction()
  }else{
    await defConfig()
    await dlAction()
  }
}

async function dlAction(){
  // Remove <template> dir 
  try {
    await fse.remove(tplPath)
  } catch (err) {
    console.error(err)
    process.exit() 
  }

  const jsonConfig = await fse.readJson(cfgPath)
  const dlSpinner = ora(chalk.cyan('Downloading template...'))
  
  // Download js-plugin-cli template
  dlSpinner.start()
  try {
    await download(jsonConfig.mirror + 'template.zip', path.resolve(__dirname,'../template/'),{extract:true});
  } catch (err) {
    dlSpinner.text = chalk.red(`Download template failed. ${err}`)
    dlSpinner.fail()
    process.exit() 
  }
  dlSpinner.text = 'Download template successful.'
  dlSpinner.succeed()
}

module.exports = dlTemplate


