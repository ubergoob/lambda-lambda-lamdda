module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-available-tasks');

  grunt.loadNpmTasks('grunt-aws-lambda');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');

  var aws = require('./aws.json');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    dirs: {
      build: 'build',
      dist: 'dist'
    },
    clean: {
      build: ['<%= dirs.build %>'],
      dist: ['<%= dirs.dist %>']
    },
    copy: {
      main: {
        src: ['**/*', '!**/node_modules/**'],
        expand: true,
        dest: '<%= dirs.build %>'
      }
    },
    availabletasks: {
      tasks: {
        options: {
          filter: 'exclude',
          tasks: ['availabletasks']
        }
      }
    },
    lambda_invoke: {
      default: {}
    },
    lambda_deploy: {
      default: {
        arn: aws.lambda_function_arn
      }
    },
    lambda_package: {
      default: {
        options: {
          //include_files: ['**/node_modules/**']
        }
      }
    }
  });


  grunt.registerTask('default', 'Grunt Test', function () {
    grunt.log.writeln('Grunt ran default task just fine!');
  });
  grunt.registerTask('tasks', 'List Available Tasks', ['availabletasks']);

  grunt.registerTask('package', 'Custom package of lambda script',
    function(){
      //console.log('Build Path: ' + grunt.config.get('dirs').build);
      //grunt.file.setBase(grunt.config.get('dirs').build);
      grunt.task.run('lambda_package');
      //grunt.file.setBase(process.cwd());
    });
  grunt.registerTask('build', 'Build lambda deployment', ['clean', 'copy', 'package']);
  grunt.registerTask('deploy', 'Deploy Lambda', ['build', 'lambda_deploy']);

};