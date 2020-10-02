<p align="center"><img src="https://s2.ax1x.com/2020/02/04/1DsmTO.png" height = "100" /></p>

<h2 align="center">VitePress-CLI</h2>

<p align="center">A lightweight CLI for VitePress project.</p>

<p align="center">
<img src="https://img.shields.io/badge/build-passing-brightgreen?style=flat-square" alt="Build Status">
<img src="https://img.shields.io/github/package-json/v/zpfz/vitepress-cli?style=flat-square&color=orange" alt="Version">
<img src="https://img.shields.io/badge/license-MIT-brightgreen?style=flat-square&color=blue" alt="MIT">
<img alt="npm" src="https://img.shields.io/npm/dt/vitepress-cli?style=flat-square&color=red" alt="downloads">
</p>

# Installation
```
$ npm i vitepress-cli -g
```
# Usage
Run the following command line to create the project:
```
$ vitepress-cli init myproject
```

# Parameter
## init <PROJECT_NAME>
Create the VitePress project:
```
$ vitepress-cli init myproject
```

## upgrade
Check the new version is available or not:
```
$ vitepress-cli upgrade
```

## template
You can download or upgrade the template from mirror:
```
$ vitepress-cli template
```

## mirror <TEMPLATE_MIRROR>
You can also set the template mirror like this:
```
$ vitepress-cli mirror https://zpfz.vercel.app/template/vitepress/
```
**NOTE**  
You can customize the template mirror link by youself, but the template file name must be `template.zip`, and the mirror link should be `/` ending.  
For example, the full link to your custom template mirror is `https://example.com/mirror/template.zip`, the mirror link that vitepress-cli can recognize should be `https://example.com/mirror/`.  

You can download the VitePress template from [vitepress-cli/tpl](https://github.com/zpfz/vitepress-cli/tpl). 
