<h2 align="center">js-plugin-cli</h2>

<p align="center">A lightweight javascript plugin CLI.</p>

<p align="center">
<img src="https://img.shields.io/badge/build-passing-brightgreen?style=flat-square" alt="Build Status">
<img src="https://img.shields.io/github/package-json/v/zpfz/js-plugin-cli?style=flat-square&color=orange" alt="Version">
<img src="https://img.shields.io/badge/license-MIT-brightgreen?style=flat-square&color=blue" alt="MIT">
<img alt="npm" src="https://img.shields.io/npm/dt/js-plugin-cli?style=flat-square&color=red" alt="downloads">
</p>

# Installation
```
$ npm i js-plugin-cli -g
```
# Usage
Run the following command line to create the project:
```
$ js-plugin-cli init myproject
```

# Parameter
## init <PROJECT_NAME>
Create the JavaScript plugin project:
```
$ js-plugin-cli init myproject
```

## upgrade
Check the new version is available or not:
```
$ js-plugin-cli upgrade
```

## template
You can download or upgrade the template from mirror:
```
$ js-plugin-cli template
```

## mirror <TEMPLATE_MIRROR>
You can also set the template mirror like this:
```
$ js-plugin-cli mirror https://zpfz.vercel.app/download/files/frontend/tpl/js-plugin-cli/
```
**NOTE**  
You can customize the template mirror link by youself, but the template file name must be `template.zip`, and the mirror link should be `/` ending.  
For example, the full link to your custom template mirror is `https://example.com/mirror/template.zip`, the mirror link that js-plugin-cli can recognize should be `https://example.com/mirror/`.  

You can download the js-plugin-cli template from [js-plugin-cli/tpl](https://github.com/zpfz/js-plugin-cli/tree/master/tpl). 
