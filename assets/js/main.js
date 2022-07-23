// Mail
(function ($) {
  window.fnames = new Array();
  window.ftypes = new Array();
  fnames[0] = "EMAIL";
  ftypes[0] = "email";
  fnames[1] = "FNAME";
  ftypes[1] = "text";
  fnames[2] = "LNAME";
  ftypes[2] = "text";
  fnames[3] = "ADDRESS";
  ftypes[3] = "address";
  fnames[4] = "PHONE";
  ftypes[4] = "phone";
  fnames[6] = "MMERGE6";
  ftypes[6] = "dropdown";
})(jQuery);
var $mcj = jQuery.noConflict(true);

document.getElementById("btnMenu").addEventListener('click', mostrarMenu);

nav = document.getElementById("nav");

backgroundMenu = document.getElementById("backMenu");

document.getElementById('backMenu').addEventListener('click', ocultarMenu);
document.getElementById("btnClose").addEventListener('click', ocultarMenuSegundo);


function mostrarMenu() {
  nav.style.right = "0px";
  backgroundMenu.style.display = "block"; // esto lo que hace es que cuando se le da click al boton se pone el backmenu de fondo es ese fondo de color negro es un efecto bonito
}

function ocultarMenu() {
  nav.style.right = "-250px";
  backgroundMenu.style.display = "none"; // esto lo que hace es que cuando se le da click al boton se pone el backmenu de fondo es ese fondo de color negro es un efecto bonito
}

function ocultarMenuSegundo(){
  nav.style.right = "-250px";
  backgroundMenu.style.display = "none";
}


// ==============================Scroll mapa =============================
// const links = document.querySelectorAll(".page-header ul a");

// for (const link of links) {
//   link.addEventListener("click", clickHandler);
// }

// function clickHandler(e) {
//   e.preventDefault();
//   const href = this.getAttribute("href");

//   document.querySelector(href).scrollIntoView({
//     behavior: "smooth",
//   });
// }