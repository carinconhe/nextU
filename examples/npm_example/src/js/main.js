(function($){
  var firstVariable = null;
  var initialize = function(){
    console.log('1- firstVariable',firstVariable);
    firstVariable = 1;
    console.log('2- firstVariable-',firstVariable);
  }
  return {
    init : initialize()
  }
})(jQuery)
