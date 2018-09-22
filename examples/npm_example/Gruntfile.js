module.exports =function(grunt){
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    autor:'NextU'
  });

  grunt.registerTask('Hola','mi primera tarea registrada',function(){
    grunt.log.writeln("Hola esta es mi primera tarea por "+grunt.config('autor'));
  });
}
