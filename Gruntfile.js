module.exports = function(grunt) {

    grunt.initConfig({
      jshint: {
        files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
        options: {
          globals: {
            jQuery: true
          }
        }
      },
      watch: {
        files: ['<%= jshint.files %>'],
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
            'dest/output.min.js': ['src/input1.js', 'src/input2.js']
          }
        }
      },
      sass: {                              // Task
        dist: {                            // Target
          options: {                       // Target options
            style: 'expanded'
          },
          files: {                         // Dictionary of files
            'main.css': 'main.scss',       // 'destination': 'source'
            'widgets.css': 'widgets.scss'
          }
        }
      },
      validation: {
        options: {
            reset: grunt.option('reset') || false,
            stoponerror: false,
            remotePath: 'http://decodize.com/',
            remoteFiles: ['html/moving-from-wordpress-to-octopress/',
                          'css/site-preloading-methods/'], //or
            remoteFiles: 'validation-files.json', // JSON file contains array of page paths.
            relaxerror: ['Bad value X-UA-Compatible for attribute http-equiv on element meta.'] //ignores these errors
        },
        files: {
            src: ['<%= yeoman.app %>/*.html',
                  '!<%= yeoman.app %>/index.html',
                  '!<%= yeoman.app %>/modules.html',
                  '!<%= yeoman.app %>/404.html']
        }
    }


    });
  
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-w3c-css-validation');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-html-validation');
  
    grunt.registerTask('default', ['jshint', 'watch', 'w3c_css_validation', 'uglify', 'sass', 'validation']);
  
  };

  // grunt.registerTask('default', ['sass']);