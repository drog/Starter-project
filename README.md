# Starter project [![Dependency Status](https://david-dm.org/drog/Starter-project/status.svg?style=flat)](https://david-dm.org/drog/Starter-project) [![Build Status](https://travis-ci.org/drog/Starter-project.svg?branch=master)](https://travis-ci.org/drog/Starter-project)

**Live Demo**: http://104.236.49.178:3000/

## About the project
Starter Project with MEAN stack -> Mongo, express with [jwt](https://auth0.com/blog/2014/01/07/angularjs-authentication-with-cookies-vs-token/), angularjs [based on Angular Style Guide by John Papa](https://github.com/johnpapa/angular-styleguide), node.js and  [angular-material](https://github.com/angular/material) with [angular-material-data-table](https://github.com/daniel-nagy/md-data-table)




## Getting Started


```bash
$ git clone git@github.com:drog/Starter-project.git starter-project
$ cd starter-project

# Install NPM dependencies and bower dependencies
$ npm install && bower install

# Start the server in Development
$ gulp serve-dev

# Start the server in Prodcution
$ gulp serve-build

```


## Some Screenshoots
<img src="http://i.imgur.com/smqqiuv.png" alt="login" />
<img src="http://i.imgur.com/0mRHcha.png" alt="register" />

<img src="http://i.imgur.com/OK6byJl.png" alt="angular table" />

## Change Theme

src/client/app/core/config.js
```javascript
    core.config(configureTheme);

    function configureTheme($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('orange')
            .warnPalette('red');
    }
```
More info on [Material Angular Page](https://material.angularjs.org/HEAD/#/Theming/03_configuring_a_theme)


## License

MIT