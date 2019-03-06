$(window).scroll(function(){
    if($(this).scrollTop() > 300){ //condición a cumplirse cuando el usuario aya bajado 301px a más.
      $("#arriba").slideDown(); //se muestra el botón en 300 mili segundos
    }else{ // si no
      $("#arriba").slideUp(); //se oculta el botón en 300 mili segundos
    }
  });
  