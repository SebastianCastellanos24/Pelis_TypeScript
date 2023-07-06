export default class List{
    content: any;
    
    constructor() {
        this.content = document.querySelector("#cotent");
    }

    peliTemplate(peli:any) {
        return `
        <article class="peli-iteam" id="peli_${peli.id}">
            <h3 class="title">${peli.title}</h3>
            <p class="description">${peli.description}</p>

            <button class="edit" data-id="${peli.id}">Editar</button>
            <button class="delete" data-id="${peli.id}">Eliminar</button>
        </article>`;
    }

    addToList(peli:any, listOfPelis:any) {

        let peli_html = this.peliTemplate(peli);

        this.content.innerHTML += peli_html;

        this.show(listOfPelis)
    }

    show(pelis:any) {
        this.content.innerHTML += "";

        pelis.forEach((peli: any) => {
            this.content.innerHTML += this.peliTemplate(peli);
        })
    }

}