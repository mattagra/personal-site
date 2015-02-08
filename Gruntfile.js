module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      files: [
          'Gruntfile.js',
          'server.js',
          'public/*.js', 
          'public/assets/js/**/*.js', 
          'public/components/**/*.js', 
          'app/**/*.js',
          'config/**/*.js'
        ],
      options: {
        // options here to override JSHint defaults
        globals: {
          jQuery: true,
          console: true,
          module: true,
          document: true
        }
      }
    },
    watch: {
      files: ['<%= jshint.files %>'],
      tasks: ['jshint']
    },
    browserSync: {
      default_options: {
        bsFiles: {
          src: [
            "public/**/*.css",
            "public/**/*.html",
            "public/components/**/*.js"
          ]
        },
        options: {
          watchTask: true,
          proxy: "localhost:8880"
          // server: {
          //   baseDir: "./public"
          // }
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  //grunt.registerTask('test', ['jshint']);

  grunt.registerTask('default', ["browserSync", "watch"]);

};