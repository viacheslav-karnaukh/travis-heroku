module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.repository.url %>\n' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>' +
      ' Licensed <%= pkg.license %> */\n',

    paths: {
      src: {
        js: ['bower_components/jquery/dist/jquery.js', 'bower_components/highlightjs/highlight.pack.js', 'dev/js/**/*.js'],
        css: ['bower_components/bootstrap/dist/css/bootstrap.css', 'dev/css/main.css', 'bower_components/highlightjs/styles/github.css']
      },
      dest: {
        js: 'prod/all.js',
        jsMin: 'prod/all.min.js',
        css: 'prod/all.css',
        cssMin: 'prod/all.min.css'
      },
      test: 'dev/js/components/*.js'
    },
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      js: {
        src: '<%= paths.src.js %>',
        dest: '<%= paths.dest.js %>'
      },
      css: {
        src: '<%= paths.src.css %>',
        dest: '<%= paths.dest.css %>'
      }
    },
    uglify: {
      options: {
        banner: '<%= banner %>',
        mangle: false
      },
      prod: {
        files: {
          '<%= paths.dest.jsMin %>': ['<%= paths.dest.js %>']
        }
      }
    },
    cssmin: {
      files: {
        src: '<%= paths.dest.css %>',
        dest: '<%= paths.dest.cssMin %>'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: false,
        unused: true,
        boss: true,
        eqnull: true
      },
      files: ['Gruntfile.js', 'dev/js/**/*.*']
    },
    watch: {
      options: {
        dateFormat: function(time) {
          var prettyTime = (function(t) {
            return t.toTimeString().slice(0, 8);
          })(new Date());
          grunt.log.writeln(prettyTime + ' completed watch in ' + time + 'ms');
          grunt.log.writeln('Waiting for more changes in your code...');
        }
      },
      gruntfile: {
        files: 'Gruntfile.js'
      },
      src: {
        files: ['dev/**/*.*', '!dev/test/**/*.*'],
        tasks: ['default']
      }
    },
    clean: {
      files: ['prod/all.js', 'prod/all.css'],
      hooks: ['.git/hooks/pre-commit']
    },
    shell: {
      hooks: {
        command: 'cp git-hooks/pre-commit .git/hooks/'
      }
    },
    jasmine: {
      src: '<%= paths.test %>',
      options: {
        specs: 'dev/test/*Spec.js',
        vendor: 'bower_components/jquery/dist/jquery.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin', 'clean']);
  grunt.registerTask('watch', ['watch']);
  grunt.registerTask('createhook', ['clean:hooks', 'shell:hooks']);
  grunt.registerTask('test', ['jasmine']);
};