var Calculadora = (function(){
  var result = 0.0;

  var suma = function(){
     console.log('Metodo Suma');
     return parseFloat(result);
  };

  var resta = function(){
   console.log('Metodo Resta');
   return parseFloat(result);
  };

  var multiplicacion = function(){
   console.log('Metodo Multiplicación');
   return parseFloat(result);
  };

  var division = function(){
   console.log('Metodo División');
   return parseFloat(result);
  };

  var events = {
    onKeyPressCal:function(event){
      var e = event || window.event;
      var key = e.keyCode || e.which;
      // console.log('Valor ',key,String.fromCharCode(key));
      if(!e.shiftKey && !e.altKey && !e.ctrlKey &&
        // numbers
        key >= 48 && key <= 57 ||
        // Numeric keypad
        key >= 96 && key <= 105 ||
        // Esc and Tab and Enter
        key == 27 || key == 9 || key == 13 ||
        //Signal + - * /
        key==187 || key==189 || key==221 || key==191){
          switch (key) {
            case 187:
              console.log('Valor ','+');
              break;
            case 189:
              console.log('Valor ','-');
              break;
            case 221:
              console.log('Valor ','*');
              break;
            case 191:
              console.log('Valor ','/');
              break;
            case 27 :
              document.getElementById('display').innerText= 0;
              break
            default:
                var display = document.getElementById('display').innerText;
                if(display==='0' && display.length===1)
                  document.getElementById('display').innerText= String.fromCharCode(key);
                else
                  document.getElementById('display').innerText += String.fromCharCode(key);
          }
      }else{
        e.returnValue = false;
        if (e.preventDefault) e.preventDefault();
      }
    }
  }

  var initialize = function() {
   console.log('Init');
   document.addEventListener('keydown',events.onKeyPressCal);
  };
  return {
      init: initialize
  }
})();

Calculadora.init();

// document.addEventListener('keydown', function(event) {
//   var e = event || window.event;
//   var key = e.keyCode || e.which;
//   // console.log('Valor ',key,String.fromCharCode(key));
//   if(!e.shiftKey && !e.altKey && !e.ctrlKey &&
//     // numbers
//     key >= 48 && key <= 57 ||
//     // Numeric keypad
//     key >= 96 && key <= 105 ||
//     // Esc and Tab and Enter
//     key == 27 || key == 9 || key == 13 ||
//     //Signal + - * /
//     key==187 || key==189 || key==221 || key==191){
//       switch (key) {
//         case 187:
//           console.log('Valor ','+');
//           break;
//         case 189:
//           console.log('Valor ','-');
//           break;
//         case 221:
//           console.log('Valor ','*');
//           break;
//         case 191:
//           console.log('Valor ','/');
//           break;
//         case 27 :
//           document.getElementById('display').innerText= 0;
//           break
//         default:
//             var display = document.getElementById('display').innerText;
//             if(display==='0' && display.length===1)
//               document.getElementById('display').innerText= String.fromCharCode(key);
//             else
//               document.getElementById('display').innerText += String.fromCharCode(key);
//       }
//   }else{
//     e.returnValue = false;
//     if (e.preventDefault) e.preventDefault();
//   }
// });
