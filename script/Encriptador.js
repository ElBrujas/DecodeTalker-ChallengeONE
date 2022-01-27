import{Diccionario} from "./Diccionario.js";

class Encriptador{
    constructor(){
        this._miDiccionario = new Diccionario;
    }

    encriptarMensaje(unMensaje){
        let caracteresClave = this._miDiccionario.claves;
        let mensajeActual = unMensaje;


        for (let index = 0; index < caracteresClave.length; index++) {
            let caracterBuscado = caracteresClave[index];
            let valorDeCaracter = this._miDiccionario.valorPorClave(caracterBuscado);
            mensajeActual = mensajeActual.replaceAll(caracterBuscado, valorDeCaracter);
        }

        return mensajeActual;
    }
}