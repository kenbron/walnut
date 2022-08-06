Walnut is a subtheme of Olivero. As such, it used PostCSS as a CSS complier. We are using Grunt as the task runner for PostCSS. 

### Development environment

Required software to install:

+ nvm
+ node.js
+ npm

NVM - see [https://github.com/nvm-sh/nvm](https://github.com/nvm-sh/nvm). I used the curl method to download it

Node.js - use nvm to install node.js with `nvm install node`. This should install npm, too. Check with 

```
node -v
npm -v
```

Install [grunt](https://gruntjs.com/) CLI but not grunt itself yet.

At this point you can just run `npm install` and it will use the package.json file to install the remaining dependicies on your system. 

You will also need the Gruntfile.js. Once you have that you can run `grunt` from terminal and it should build your css from your postcss file.