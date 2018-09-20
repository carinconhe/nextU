var Calculadora = (function(){
  var result          = 0;
  var isPoint         = false;
  var display         = document.getElementById('display');
  var canAddDigital   = true;
  var firstNumber     = null;
  var secondNumber    = null;
  var opSignal        = null;
  var functions = {
    oncButton : function(){
      display.innerText = 0;
      isPoint           = false;
      canAddDigital     = true;
      firstNumber       = null;
      secondNumber      = null;
      opSignal          = null;
    },
    pointButton : function(){
      if(functions.validatorDisplay()){
        if(!isPoint){
          display.innerText += ".";
          isPoint = true;
        }
      }
    },
    signButton : function(){
      if(functions.validatorDisplay()){
        if(parseFloat(display.innerText)!==0){
          if(parseFloat(display.innerText)<0)
            display.innerText = Math.abs(parseFloat(display.innerText)); //display.innerText.replace('-','');
          else
            display.innerText = "-"+display.innerText;
        }else {
          display.innerText = 0;
        }
      }
    },
    validatorDisplay : function(){
      if(display.innerText.length<8)
        return true;
      else
        return false;
    },
    addDigitNumber : function(value,type){
      if(display.innerText=='ERROR'){
        functions.oncButton();
        console.log('Error en operacion');
      }
      if(functions.validatorDisplay()){
        if(display.innerText==='0' && display.innerText.length===1){
          if(type==0)
            display.innerText= String.fromCharCode(value);
          else
            display.innerText= value;
        }else{
          //console.log('Oper',opSignal,'canAddDigital',canAddDigital);
          if(canAddDigital){
            if(type==0)
              display.innerText += String.fromCharCode(value);
            else
              display.innerText += value;
          }else{
            if(type==0)
              display.innerText= String.fromCharCode(value);
            else
              display.innerText= value;
              canAddDigital = true;
          }
        }

      }
    },
    addDataToArray : function(value,operator){
      console.log('firstNumber',parseFloat(firstNumber),'secondNumber',secondNumber,'Operador',opSignal,'Result',result);
      if(firstNumber==null && opSignal==null){
        firstNumber   = value;
        opSignal      = operator;
        canAddDigital = false;
      }else if(firstNumber!=null && opSignal!=null){
        console.log('1',value,operator);
        secondNumber  = value;
        canAddDigital = false;
        switch (operator) {
          case '=':
            functions.equalButton();
            break;
          case '-':

            break;
          case '+':

            break;
          case '*':

            break;
          case '/':

            break;
        }
      }else{
        console.log('2',value,operator);
      }

      //console.log('firstNumber',parseFloat(firstNumber),'secondNumber',secondNumber,'Operador',opSignal,'Result',result);
    },
    equalButton:function(){
      console.log('firstNumber',parseFloat(firstNumber),'secondNumber',secondNumber,'Result',result);
      if(secondNumber){
        switch (opSignal) {
          case '-':

            break;
          case '+':
            suma();
            break;
          case '*':

            break;
          case '/':

            break;
        }
      }
    },
    pressButton:function(){
      functions.addDigitNumber(this.getAttribute('id'),1);
    },
    keyDownImg :function(){
      currentWidth      = this.clientWidth;
      currentHeight     = this.clientHeight;
      if(this.getAttribute('id')=="mas"){
        this.style.width  = "90%";
        this.style.height = "90%";
      }else{
        this.style.width  = (currentWidth - 5) + "px";
        this.style.height = (currentHeight - 5) + "px";
      }

    },
    keyUpImg :function(){
      if(this.getAttribute('id')=="mas"){
        this.style.width  = "100%";
        this.style.height = "100%";
      }else if(this.getAttribute('id')=="1" || this.getAttribute('id')=="2" ||
               this.getAttribute('id')=="3" || this.getAttribute('id')=="0" ||
               this.getAttribute('id')=="punto" || this.getAttribute('id')=="igual"){
        this.style.width  = "29%";
        this.style.height = "62.91px";
      }else{
        this.style.width  = "22%";
        this.style.height = "62.91px";
      }
    }

  }

  var events = {
    onKeyPressCal : function(event){
      var e = event || window.event;
      var key = e.keyCode || e.which;
      //console.log('Valor ',key,String.fromCharCode(key));
      if(!e.shiftKey && !e.altKey && !e.ctrlKey &&
        // numbers
        key >= 48 && key <= 57 ||
        // Numeric keypad
        key >= 96 && key <= 105 ||
        // Esc and Tab and Enter and point
        key == 27 || key == 9 || key == 13 || key == 190 ||
        //Signal + - * /
        key==187 || key==189 || key==221 || key==191){
          switch (key) {
            case 187:
              functions.addDataToArray(display.innerText,'+');
              break;
            case 189:
              functions.addDataToArray(display.innerText,'-');
              break;
            case 190:
              functions.pointButton();
              break;
            case 191:
              functions.addDataToArray(display.innerText,'/');
              break;
            case 221:
              functions.addDataToArray(display.innerText,'*');
              break;
            case 27 :
              functions.oncButton();
              break;
            case 13 :
              //functions.equalButton();
              functions.addDataToArray(display.innerText,'=');
              break;
            default:
                //console.log('Valor ',key,String.fromCharCode(key));
                functions.addDigitNumber(key,0);
              break;
          }
      }else{
        e.returnValue = false;
        if (e.preventDefault) e.preventDefault();
      }
    }
  }

  var initialize = function() {

   document.addEventListener('keydown',events.onKeyPressCal);
   document.getElementById('on').addEventListener('click',functions.oncButton);
   document.getElementById('punto').addEventListener('click',functions.pointButton);
   document.getElementById('sign').addEventListener('click',functions.signButton);
   document.getElementById('igual').addEventListener('click',functions.equalButton);

   var teclas = document.querySelectorAll('.tecla');
   [].forEach.call(teclas, function(tecla) {
     for(i=0;i<teclas.length;i++){
       document.getElementById(tecla.getAttribute("id")).addEventListener('mousedown',functions.keyDownImg);
       document.getElementById(tecla.getAttribute("id")).addEventListener('mouseup',functions.keyUpImg);
       if(tecla.getAttribute('id')==i.toString()){
         document.getElementById(tecla.getAttribute("id")).addEventListener('click',functions.pressButton);
       }
      }
    });

    document.getElementsByClassName('fondo')[0].blur();
  };
  var suma = function(){
     result            = parseFloat(firstNumber)+parseFloat(secondNumber);
     display.innerText = result;
     firstNumber       = secondNumber;
     secondNumber      = null;
  };
  return {
      init : initialize,
      resta : function(){
       console.log('Metodo Resta');
       return parseFloat(result);
      },
      multiplicacion : function(){
       console.log('Metodo Multiplicación');
       return parseFloat(result);
      },
      division : function(){
       console.log('Metodo División');
       return parseFloat(result);
      }
  }
})();

Calculadora.init();
