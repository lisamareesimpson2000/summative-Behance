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
      w3c_css_validation: {
        options: {
          // Task-specific options go here.
        },
        your_target: {
          // Target-specific file lists and/or options go here.
        },
      },
      uglify: {
        my_target: {
          files: {
            'public/output.min.js': ['public/js/main.js']
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
      validation: {
      
        files: {
            src: ['public/index.html']
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
    grunt.loadNpmTasks('grunt-w3c-css-validation');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-html-validation');
    grunt.loadNpmTasks('grunt-contrib-concat');

  
    grunt.registerTask('default', ['jshint', 'watch', 'w3c_css_validation', 'uglify', 'sass', 'validation', 'concat']);
  
  };

  // grunt.registerTask('default', ['sass']);