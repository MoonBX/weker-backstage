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
    // 打包到build文件夹里
    //copy: {
    //  res:{
    //    expand: true, src: ['./img/**'], dest: './build/'
    //  },
    //  lib:{
    //    expand:true, src:['./lib/**'],dest: './build/'
    //  },
    //  css: {
    //    expand: true, src: ['./css/**'], dest: './build/'
    //  },
    //  html: {
    //    expand: true, src: ['./*.html','./views/**'], dest: './build/', encoding: "utf-8"
    //  },
    //  js:{
    //    expand: true, src: ['./ng/**'], dest: './build/', encoding: "utf-8"
    //  },
    //  json:{
    //    expand: true, src: ['./json/**'], dest: './build/'
    //  },
    //  fonts:{
    //    expand: true, src: ['./fonts/**'], dest: './build/'
    //  }
    //},

    connect: {
      options: {
        port: 8889,
        hostname: '*', //默认就是这个值，可配置为本机某个 IP，localhost 或域名
        livereload: 35788  //声明给 watch 监听的端口
      },

      server: {
        options: {
          open: true, //自动打开网页 http://
          base: [
            '.'  //主目录
          ]
        }
      }
    },
    watch: {
      livereload: {
        options: {
          livereload: '<%=connect.options.livereload%>'  //监听前面声明的端口  35729
        },

        files: [  //下面文件的改变就会实时刷新网页
          '*.html',
          'css/{,*/}*.css',
          'ng/{,*/}*.js',
          'img/{,*/}*.{png,jpg}'
        ]
      }
    }
  });
  grunt.loadNpmTasks('grunt-bower-task');
  //grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  //grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.task.registerTask('serve', ['bower','less'/*,'concat','cssmin'*/, 'connect:server', 'watch']);
}
