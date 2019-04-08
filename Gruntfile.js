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
          'public/css/main.css': 'public/sass/main.scss'      // 'destination': 'source'
        }
      }
    },
    validation: {
    
      files: {
          src: ['public/index.html']
      }
  },
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
  grunt.loadNpmTasks('grunt-w3c-css-validation');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-html-validation');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-connect');


  grunt.registerTask('default', ['sass', 'concat', 'jshint', 'watch', 'uglify', 'validation']);

};

// grunt.registerTask('default', ['sass']);