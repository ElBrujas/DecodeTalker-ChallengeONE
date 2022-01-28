export class Validador{
    constructor(){
        this.reglasDeFiltro = new RegExp ("[^a-z0-9-\\s-ñ]");
    }

    validarTexto(unTexto){
        return ((!this.reglasDeFiltro.test(unTexto)) && (unTexto != ""));
    }
}
