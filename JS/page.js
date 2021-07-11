const bodyElement = document.querySelector("body");

console.log(bodyElement.classList.length);

//timeout para tirar bug do transition ocorrer ao recarregar página.
setTimeout(function () {
    bodyElement.classList.remove('preload')
}, 500)