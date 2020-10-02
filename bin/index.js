#!/usr/bin/env node

const program = require('commander')
const fse = require('fs-extra')
const ora = require('ora')
const chalk = require('chalk')
const symbols = require('log-symbols')
const inquirer = require('inquirer')
const handlebars = require('handlebars')
const path = require('path')

const updateChk = require('../lib/update')
const setMirror = require('../lib/mirror')
const dlTemplate = require('../lib/download')

// version
program.version(require('../package.json').version, '-v, --version')

// upgrade
program
	.command('upgrade')
	.description('Check the js-plugin-cli version.')
	.action(() => {
		updateChk()
	})

// mirror
program
	.command('mirror <template_mirror>')
	.description('Set the template mirror.')
	.action((tplMirror) => {
		setMirror(tplMirror)
	})

// template
program
	.command('template')
	.description('Download template from mirror.')
	.action(() => {
		dlTemplate()
	})

// init
program
	.name('js-plugin-cli')
	.usage('<commands> [options]')
	.command('init <project_name>')
	.description('Create a javascript plugin project.')
	.action((project) => {
		fse.pathExists(project).then((exists) => {
			if (exists) {
				console.log(symbols.error, chalk.red('The project already exists.'))
			} else {
				inquirer
					.prompt([
						{
							type: 'input',
							name: 'name',
							message: 'Set a global name for javascript plugin?',
							default: 'Default',
						},
					])
					.then((answers) => {
						const templatePath = path.resolve(__dirname, '../template/')
						const processPath = process.cwd()
						const targetPath = `${processPath}/${project}`

						fse.pathExists(templatePath).then((exists)=>{
							if (!exists) {
								dlTemplate().then(()=>{
                  console.log(templatePath)
                  fse.copy(templatePath, targetPath)
                  // copyFiles(templatePath, targetPath)  
                })
							}
            })
					})
					.catch((error) => {
						if (error.isTtyError) {
							console.log(
								symbols.error,
								chalk.red(
									"Prompt couldn't be rendered in the current environment."
								)
							)
						} else {
							console.log(symbols.error, chalk.red(error))
						}
					})
			}
		})
	})

function copyFiles(templatePath, targetPath) {
  return new Promise((resolve,reject) => {
    fse.copy(templatePath, targetPath).then(()=>{
      console.log('success!')
      resolve()
    })
    .catch((err)=>{
      console.log(symbols.error, chalk.red(`Failed to copy template. ${err}`))
      reject(err)
    })
  })
	// try {
	// 	await fse.copy(templatePath, targetPath)
	// 	console.log('success!')
	// } catch (err) {
	// 	console.log(symbols.error, chalk.red(`Failed to copy template. ${err}`))
	// }
}

// async function createTpl(){
//   // return new Promise(function(resolve, reject) {
//     await dlTemplate()
//     // resolve()
//   // })
// }

program.parse(process.argv)
