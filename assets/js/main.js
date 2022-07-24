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
document.getElementById("eagleNav").addEventListener('click',  ocultarMenuTercero);
document
  .getElementById("felicityNav")
  .addEventListener("click", ocultarMenuQuinto);
  document
    .getElementById("simpleAutoNav")
    .addEventListener("click", ocultarMenuCuarto);
  document
    .getElementById("diamondHome")
    .addEventListener("click", ocultarMenuSexto);

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

function ocultarMenuTercero(){
  nav.style.right = "-250px";
  backgroundMenu.style.display = "none";
}
function ocultarMenuCuarto() {
  nav.style.right = "-250px";
  backgroundMenu.style.display = "none";
}
function ocultarMenuQuinto() {
  nav.style.right = "-250px";
  backgroundMenu.style.display = "none";
}
function ocultarMenuSexto() {
  nav.style.right = "-250px";
  backgroundMenu.style.display = "none";
}