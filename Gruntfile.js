/*global module:false*/
module.exports = function(grunt) {
    // These plugins provide necessary tasks.
  grunt.loadNpmTasks('@lodder/grunt-postcss');
  // Project configuration.
  const postcssPresetEnv = require('postcss-preset-env')
  const postcssImport = require('postcss-import')
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
          postcssImport()
        ]
      },
      dist: {
        src: 'css/components/header-site-branding.pcss.css',
        dest: 'css/components/header-site-branding.css'
      },
    }
  });



  // Default task.
  grunt.registerTask('default', ['postcss']);

};
