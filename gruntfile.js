/**
 * Created by zhongyuqiang on 16/5/9.
 */
module.exports = function(grunt) {
  grunt.config.init({
    pkg: grunt.file.readJSON('package.json'),

    bower: {
      install: {
        options: {
          targetDir: './build/lib/',
          layout: 'byComponent',
          install: true,
          verbose: false,
          cleanTargetDir: false,
          cleanBowerDir: false,
          bowerOptions: {}
        }
      }
    },
    less: {
      development: {
        options: {
          paths: ["assets/css"]
        },
        files: [{
          expand: true,
          cwd: './less',
          src: ['*.less'],
          dest: './css/src',
          ext: '.css'
        }]
      }
    },
    concat : {
      css : {
        src: ['./css/src/*.css'],
        dest:'./css/all.css'
      }

    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: './css',
          src: ['all.css', '!*.min.css'],
          dest: './build/css',
          ext: '.min.css'
        }]
      }
    },
    copy: {
      res:{
        expand: true, src: ['./img/**'], dest: './build/'
      },
      lib:{
        expand:true, src:['./lib/**'],dest: './build/'
      },
      css: {
        expand: true, src: ['./css/**'], dest: './build/'
      },
      html: {
        expand: true, src: ['./*.html','./views/**'], dest: './build/', encoding: "utf-8"
      },
      js:{
        expand: true, src: ['./ng/**'], dest: './build/', encoding: "utf-8"
      },
      json:{
        expand: true, src: ['./json/**'], dest: './build/'
      },
      fonts:{
        expand: true, src: ['./fonts/**'], dest: './build/'
      }
    },

    connect: {
      server: {
        options: {
          protocol: 'http',
          port: 9000,
          hostname: '*',
          keepalive: true,
          base: ['build/']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.task.registerTask('default', ['bower','less'/*,'concat','cssmin'*/,'copy', 'connect']);
}
