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
            'public/css/main.css': 'public/sass/main.scss'      // 'destination': 'source'
          }
        }
      },
<<<<<<< HEAD
      validation: {
      
        files: {
            src: ['public/index.html']
        }
    },
=======
>>>>>>> 0e06802053832e788ed72c9f9db7e311a9398c54
    concat: {
      // options: {
      //   separator: ';',
      // },
      dist: {
        src: ['public/js/lisa.js', 'public/js/lexi.js', 'public/js/joon.js'],
        dest: 'public/js/main.js',
      },
    },
    connect: {
      server: {
        options: {
          port: 5000,
          hostname: 'localhost',
          onCreateServer: function(server, connect, options) {
            var io = require('socket.io').listen(server);
            io.sockets.on('connection', function(socket) {
              // do something with socket
            });
          }
        }
      }
    }


    });
  
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');

  
<<<<<<< HEAD
    grunt.registerTask('default', ['sass', 'concat', 'jshint', 'watch', 'uglify', 'validation']);
=======
    grunt.registerTask('default', ['jshint', 'watch', 'uglify', 'sass', 'concat']);
>>>>>>> 0e06802053832e788ed72c9f9db7e311a9398c54
  
  };

  // grunt.registerTask('default', ['sass']);