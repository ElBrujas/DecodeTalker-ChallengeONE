import { Encriptador } from "../Clases/Encriptador.js";
import { Validador } from "../Clases/Validador.js"

let unEncriptador = new Encriptador;
let unValidador = new Validador;

let entradaTexto = document.getElementById("area-escritura");
let salidaTexto = document.getElementById("area-salida");

let botonEnviar = document.getElementById("boton-enviar");
let botonCopiar = document.getElementById("boton-copiar");
let botonLimpiar = document.getElementById("boton-limpiar");

function limpiarAreas(){
    entradaTexto.value = "";
    salidaTexto.value = "";
}

function alertaMensajeNoValido(){
    let mensajeAlerta = document.getElementById("mensaje-alerta");
    mensajeAlerta.style = "color: red"; //provicional hasta hacer el css
}

function encriptarMensaje(){
    let mensajeEntrada = entradaTexto.value;
    if(unValidador.validarTexto(mensajeEntrada)){
       salidaTexto.value = unEncriptador.encriptarMensaje(mensajeEntrada);
    }
    else{
        alertaMensajeNoValido();
    }
}

function copiarTexto(){
    let textoSalida = salidaTexto.value;
    navigator.clipboard.writeText(textoSalida);
}

botonEnviar.onclick = encriptarMensaje;
botonLimpiar.onclick = limpiarAreas;
botonCopiar.onclick = copiarTexto;
