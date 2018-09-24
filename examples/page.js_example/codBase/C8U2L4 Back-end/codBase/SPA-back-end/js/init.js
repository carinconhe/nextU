(function($){

  function sigFotos(){
    $('#fila1').hide()
    $('.next-btn').hide()
    $('#fila2').show()
    $('.prev-btn').show()
  }

  function prevFotos(){
    $('#fila1').show()
    $('.next-btn').show()
    $('#fila2').hide()
    $('.prev-btn').hide()
  }

  function asociarFoto(file){
    if (file=="img/1.jpg") {
      return "Times Square"
    }else if (file=="img/2.jpg") {
      return "Ayuntamiento"
    }
    else if (file=="img/3.jpg") {
      return "Playa"
    }
    else if (file=="img/4.jpg") {
      return "Camping"
    }
    else if (file=="img/5.jpg") {
      return "Aventura"
    }
    else if (file=="img/6.jpg") {
      return "Hotel"
    }
  }

  function cerrarFoto(){
    $('#vista-principal').empty()
    $('#vista-principal').append(`
      <div class="section no-pad-bot" id="titulo-principal">
        <div class="container">
          <br><br>
          <h1 class="header center orange-text">Fotos y más fotos</h1>
          <div class="row center">
            <h5 class="header col s12 light">Aplicación para ver tus mejores momentos</h5>
          </div>
          <br><br>
        </div>
      </div>

      <div class="next-btn">
        <a class="btn-floating btn-small light-blue lighten-1 waves-effect" id="fotos-pag2" href="fotos-pag2">
          <i class="large material-icons">keyboard_arrow_right</i>
        </a>
      </div>

      <!-- Pegar aquí la flecha a la izquierda de index2.html -->

      <div class="prev-btn invisible">
        <a class="btn-floating btn-small light-blue lighten-1 waves-effect" href="index">
          <i class="large material-icons">keyboard_arrow_left</i>
        </a>
      </div>

      <div class="container">
        <div class="section">
          <div class="row" id="fila1">
            <div class="col s12 m4">
              <div class="card">
                <div class="card-image">
                  <img src="img/1.jpg">
                  <span class="card-title">Times Square</span>
                </div>
                <div class="card-action">
                  <a href="./foto-ampliada/1">Ver mas</a>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <div class="card-image">
                  <img src="img/2.jpg">
                  <span class="card-title">Ayuntamiento</span>
                </div>
                <div class="card-action">
                  <a href="./foto-ampliada/2">Ver mas</a>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <div class="card-image">
                  <img src="img/3.jpg">
                  <span class="card-title">Playa</span>
                </div>
                <div class="card-action">
                  <a href="./foto-ampliada/3">Ver mas</a>
                </div>
              </div>
            </div>
          </div>

          <!-- Pegar aquí el código copiado de index2.html -->

          <div class="row invisible" id="fila2">
            <div class="col s12 m4">
              <div class="card">
                <div class="card-image">
                  <img src="img/4.jpg">
                  <span class="card-title">Camping</span>
                </div>
                <div class="card-action">
                  <a href="./foto-ampliada/4">Ver mas</a>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <div class="card-image">
                  <img src="img/5.jpg">
                  <span class="card-title">Aventura</span>
                </div>
                <div class="card-action">
                  <a href="./foto-ampliada/5">Ver mas</a>
                </div>
              </div>
            </div>
            <div class="col s12 m4">
              <div class="card">
                <div class="card-image">
                  <img src="img/6.jpg">
                  <span class="card-title">Hotel</span>
                </div>
                <div class="card-action">
                  <a href="./foto-ampliada/6">Ver mas</a>
                </div>
              </div>
            </div>
          </div>

        </div>
        <br><br>
      </div>


      `)

  }

  function abrirFoto(ctx, next){
    var nombreFoto = "img/"+ctx.params.foto+".jpg"
    $('#vista-principal').empty();
    $('#vista-principal').append(`
      <br>
      <div class="container">
        <div class="row pic-row">
          <div class="col s6 center">
            <h3 class="orange-text">${asociarFoto(nombreFoto)}</h3>
          </div>
          <div class="col s5 right-align above-pic">
             <a class="btn-floating btn-medium waves-effect waves-light green" id="home" href="index"><i class="material-icons">photo_library</i></a>
             <a class="btn-floating btn-medium waves-effect waves-light red"><i class="material-icons">favorite</i></a>
             <a class="btn-floating btn-medium waves-effect waves-light purple"><i class="material-icons">delete</i></a>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="section">
          <div class="row">
            <div class="col s10 offset-s1">
              <div class="card">
                <div class="card-image">
                  <img src="${nombreFoto}">
                  <span class="card-title">${asociarFoto(nombreFoto)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br><br>
      </div>
      `)

  }

  function notfound(){
    alert('NotFound');
  }

  $(function(){

    $('.button-collapse').sideNav();

    page.base('/SPA-back-end')
    page('/fotos-pag2', sigFotos)
    page('/index', cerrarFoto)
    page('/foto-ampliada/:foto', abrirFoto)
    page('*', notfound)
    page()




  }); // end of document ready
})(jQuery); // end of jQuery name space
