import{Diccionario} from "./Diccionario.js";

export class Desencriptador{
    constructor(){
        this._miDiccionario = new Diccionario;
    }

    desencriptarMensaje(unMensaje){
        let caracteresClave = this._miDiccionario.valores;
        let mensajeActual = unMensaje;


        for (let index = 0; index < caracteresClave.length; index++) {
            let caracterBuscado = caracteresClave[index];
            let valorDeCaracter = this._miDiccionario.clavePorValor(caracterBuscado);
            mensajeActual = mensajeActual.replaceAll(caracterBuscado, valorDeCaracter);
        }

        return mensajeActual;
    }
}