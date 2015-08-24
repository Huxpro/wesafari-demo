# Wesafari-Demo

> Demo of Wesafari real mobile application


## Project Dependency

* [Cordova](#) as the Hybrid Framework
* [React.js](http://facebook.github.io/react/index.html) as the View-Layer lib
* [Gulp.js](http://gulpjs.com/) as the the Build System
* [Require.js](http://requirejs.org/) as the Module Loader
* [Node.js Package Manger](https://www.npmjs.com/) as the Eco.
* [SASS](http://sass-lang.com/) as the CSS extension language
* [GitHub](https://github.com/) as the [Git](git-scm.com) version control system



## Documents

#### Run & Watch

```bash
$ sudo npm install  #install all deps
$ gulp  #serve, build and watch
$ gulp build    #more details, read gulpfile.js
```

#### Dist

```bash
$ npm run cordova-src   # copy src/ to cordova dir. you can also use cordova-dist instead
$ npm run cordova-emu   # run cordova emulate
$ npm run cordova-device # build to device connected
```

#### Essential Tips

> Seeing this Project is mess...some Tips are given here

##### React & jsx

all `reactComponent.js` is auto-generated by gulp-watch from `reactComponent.jsx`, so **NEVER** modify `.js` file directly.

Other single `feature.js` can be directly modified.

##### Files

- `hybrid.js`: call some hybrid API of Cordova, capture photos/videos and save to FileSystem.
- `app.jsx`: pay attention to method `onReset()` and `reRender()`
- `schedule.jsx`: main ListView, pay attention to `render()` and `IScroll`
- `TabBar.jsx`: view of the three "Floating Action Button"

##### Last Tips

Do **NOT** try to rebuild code unless you know what you are doing...  
There is bunch of **MAGIC** code who knows how it works....

Just fix style and feature details, and try to finish it ASAP!  
