class Validador{
    constructor(){
        this.reglasDeFiltro = new RegExp ("[^a-z0-9-\\s]");
    }

    validarTexto(unTexto){
        console.log(this.reglasDeFiltro);
        return !this.reglasDeFiltro.test(unTexto);
    }
}
