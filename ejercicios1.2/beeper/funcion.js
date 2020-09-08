var boton = document.querySelector('button');
var funcion = function(){
    var body = document.querySelector('body');
    body.insertAdjacentHTML("beforeend", "<p> BEEP </p>");
    body.classList.toggle("color");
};
boton.addEventListener("click", funcion);