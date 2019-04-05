module.exports = function(grunt) {

    grunt.initConfig({
      jshint: {
        files: ['Gruntfile.js', 'public/js/*.js'],
        options: {
          globals: {
            jQuery: true
          }
        }
      },
      watch: {
        files: ['public/**/*.*'],
        tasks: ['jshint']
      },
      uglify: {
        my_target: {
          files: {
            'public/main.min.js': ['public/js/main.js']
          }
        }
      },
      sass: {                              // Task
        dist: {                            // Target
          
          files: {                         // Dictionary of files
            'public/css/main.css': 'public/scss/main.scss'      // 'destination': 'source'
          }
        }
      },
    concat: {
      dist: {
        src: ['public/js/lisa.js', 'public/js/lexi.js', 'public/js/joon.js'],
        dest: 'public/js/main.js',
      }
    }


    });
  
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');

  
    grunt.registerTask('default', ['jshint', 'watch', 'uglify', 'sass', 'concat']);
  
  };

  // grunt.registerTask('default', ['sass']);