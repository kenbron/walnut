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
______

I am creating a branch of changes to the Walnut theme.
The them was originally created to establish a style for the beitam.org web site.
These changes being checked in on 1/17/2025 promote the use oof Sans Serif fonts in Walnut.
This was part of the original style design, but was not fully implemented in the first Walnut launch.

There are essentially two changes to this sans serif adoption:
1. Use of the Lato font as the default font for text in paragraphs
2. Use of the Metropolis font in the right-hand sidebar navigation links

### Lato
Three instances of the Lato font are being put in the font folder to enable self hosting of this font.
In the file text.pcss.css there is a paragraph (p) definition to use Lato.
Also in the file fonts.pcss.css there are font-face definitions for the three Lato font files, in regular, bold, and italic styles.

### Nav Links in Sidebar
In the file layout/layout.pcss.css there is a css style definition to use the Metropolis font in the right-hand sidebar navigation links.  this copies the use of Metropolis in the main menu navigation links, including the rendering in a greenish color.

Using grunt a new walnut-styles.css file was generated.
After some moderate testing, this walnut-styles.css file was installed on the beitam.org live site on 
1/17/2025
- Ken Bronstein
