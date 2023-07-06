import Storage from "./storage.ts";
import List from "./list.ts"

export default class Add {
    title_filed: any;
    description_filed: any;
    save: any;
    save_btn: any;

    title:any;
    description:any;

    storage:any;
    list:any;

    constructor () {
        //Crear objetos
        this.storage = new Storage();
        this.list = new List();

        //Elementos del DOM
        this.title_filed = document.querySelector("#title");
        this.description_filed = document.querySelector("#description");
        this.save_btn = document.querySelector("#save");
    }

    peliSave() {
        this.save_btn.onclick = (e:any) => {
            e.preventDefault();

            let pelis = this.storage.getData();
            let lastId = this.storage.getLastId();
            console.log(pelis, lastId)

            let title = this.title_filed.value;
            let description = this.description_filed.value;

            if(title !== "" || description !== "") {
                //Crear objeto a guardar
                let peli:any = {
                    id: lastId++,
                    title,
                    description,
                }

                //Añadir al array de objetos
                pelis.push(peli)

                //Guardar en LocalStorage
                this.storage.save(pelis)

                //Actualizar listado
                this.list.addToList(peli, pelis);

            } else {
                alert("Todos los campos son obligatrios")
            }

            return false;
        }
    }

}

