let botonPaginaEncriptar = document.getElementById("redirige-encriptar");
let botonPaginaDesencriptar = document.getElementById("redirige-desencriptar");

function irAEncriptar(){
    location.href = "./html/encripatdor.html";
}

function irADesencriptar(){
    location.href = "./html/desencriptador.html";
}

botonPaginaEncriptar.onclick = irAEncriptar;
botonPaginaDesencriptar.onclick = irADesencriptar;