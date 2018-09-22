module.exports =function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    autor:'NextU',
    uglify:{
      dist:{
        files:{
            'build/js/<%= pkg.name %>.min.js':[
                'src/js/main.js'
            ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.registerTask('default',['uglify']);

  grunt.registerTask('Hola','mi primera tarea registrada',function(){
    grunt.log.writeln("Hola esta es mi primera tarea por "+grunt.config('autor'));
  });
}
