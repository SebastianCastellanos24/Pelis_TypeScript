import Add from "./modules/add.ts"

export default class App {
    add: Add;

    constructor() {
        this.add = new Add();
    }

    load() {
        //Añadir peliculas
        this.add.peliSave();

        //Listar peliculas

        //Buscar peliculas

        console.log("Hola desdea app")
    }

}