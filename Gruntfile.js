/*global module:false*/
module.exports = function(grunt) {
    // These plugins provide necessary tasks.
  grunt.loadNpmTasks('@lodder/grunt-postcss');
  // Project configuration.
  const postcssPresetEnv = require('postcss-preset-env')
  const postcssImport = require('postcss-import')
  const postcssCSSVariables = require('postcss-css-variables')
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // Task configuration.
    // PostCSS
    postcss: {
      options: {
        map: {
          inline: false , // save all sourcemaps as separate files...
          annotation: 'css/' // ...to the specified directory
      },

        processors: [
          postcssPresetEnv({
            stage: 1
          }),
          postcssImport(),
          postcssCSSVariables()
        ]
      },
      dist: {
        src: 'css/walnut-styles.pcss.css',
        dest: 'css/walnut-styles.css'
      },
    }
  });



  // Default task.
  grunt.registerTask('default', ['postcss']);

};
