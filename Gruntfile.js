module.exports = function (grunt) {

  grunt.initConfig({

    watch: {
      test: {
        files: [
          'Gruntfile.js',
          'lib/**/*.js'
        ],
        tasks: ['test']
      }
    },

    jshint: {
      all: {
        jshintrc: '.jshintrc',
        files: {
          src: [
            'lib/**/*.js'
          ]
        }
      }
    },

    uglify: {
      dist: {
        files: {
          'dist/component-shim.min.js': ['lib/component-shim.js']
        }
      }
    },

    copy: {
      dist: {
        files: {
          'dist/component-shim.js': ['lib/component-shim.js']
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('test', ['jshint:all']);
  grunt.registerTask('dist', ['uglify:dist', 'copy:dist']);


};
