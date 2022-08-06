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

If you have problems with running nvm after installing and you are using ZSH on Mac for your shell, follow [these directions](https://www.joseverissimo.com/blog/install-nvm-on-zsh-macos-catalina) and add this to a .zshrc file:

```             
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```