module.exports = function(grunt) {
  grunt.initConfig({
 
    watch: {
      files: ['public/**/*.*'],
      tasks: ['jshint']
    },
    uglify: {
      my_target: {
        files: {
          'public/js/main.min.js': ['public/js/main.js']
          // 'public/css/main.min.css': ['public/css/main.css']
         
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
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'public/css',
          src: ['main.css' ],
          dest: 'public/css',
          ext: '.min.css'
        }]
      }
    },
    imagemin: {
      dynamic: {
          files: [{
              expand: true,
              cwd: 'public/images',
              src: ['**/*.{svg,png,jpg,gif}'],
              dest: 'public/images'
          }]
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
    src: [ 'public/js/lexi.js','public/js/lisa.js','public/js/joon.js'],
      //src: [ 'public/js/lexi.js'],
      dest: 'public/js/main.js',
    },
  },
  jshint: {
    files: ['Gruntfile.js', 'public/js/*.js'],
    options: {
      globals: {
        jQuery: true
      }
    }
  }
  

  });
  
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-html-validation');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    


  grunt.registerTask('default', ['sass', 'concat', 'uglify', 'cssmin', 'imagemin', 'validation', 'watch', 'jshint']);

};