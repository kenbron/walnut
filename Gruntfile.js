/*global module:false*/
module.exports = function(grunt) {

  // Load Grunt plugins
  grunt.loadNpmTasks('@lodder/grunt-postcss');

  // Load PostCSS plugins
  const postcssPresetEnv = require('postcss-preset-env');
  const postcssImport = require('postcss-import');
  const postcssCSSVariables = require('postcss-css-variables');
  const postcssCustomMedia = require('postcss-custom-media');
  const cssnano = require('cssnano'); // ✅ Added this line

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    postcss: {
      options: {
        map: {
          inline: false,
          annotation: 'css/'
        },
        processors: [
          postcssPresetEnv({ stage: 1 }),
          postcssImport(),
          postcssCSSVariables(),
          postcssCustomMedia(),
          cssnano({
            preset: ['default', {
              discardComments: { removeAll: true },
              normalizeWhitespace: false // keeps formatting readable
            }]
          })
        ]
      },
      dist: {
        src: 'css/walnut-styles.pcss.css',
        dest: 'css/walnut-styles.css'
      },
    }
  });

  grunt.registerTask('default', ['postcss']);
};
