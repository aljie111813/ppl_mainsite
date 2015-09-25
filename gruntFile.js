module.exports = function(grunt) {

  grunt.initConfig({
   requirejs: {
      js: {
          options: {
              uglify2: {
                  mangle: true
              },
              baseUrl: "public/js",
              mainConfigFile: "public/js/main.js",
              name: 'main',
              out: "public/build/main.min.js",
              optimize: 'uglify2'
          }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-requirejs');  

  grunt.registerTask('default', ['requirejs']);

};