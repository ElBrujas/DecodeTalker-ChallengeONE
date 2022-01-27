export class Diccionario{

    constructor(){
        this._mapa = new Map;
        this._mapaInverso = new Map;
        this._clavesYValores = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

        for (let index = 0; index < this._clavesYValores.length; index++) {
            this._mapa.set(this._clavesYValores[index][0], this._clavesYValores[index][1]);
            this._mapaInverso.set(this._clavesYValores[index][1], this._clavesYValores[index][0]);
        };
    }

    get claves(){
        return Array.from(this._mapa.keys());
    }

    get valores(){
        return Array.from(this._mapaInverso.keys());
    }

    valorPorClave(clave){
        return this._mapa.get(clave);
    }

    clavePorValor(valor){
        return this._mapaInverso.get(valor);
    }
}