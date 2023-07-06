export default class Storage {
    id: number;

    constructor () {
        this.id = 1;
    }

    getData() {
        let pelis = JSON.parse(localStorage.getItem("pelis") || '{}');

        if(!pelis || pelis.length < 1) {
            pelis = [
                {
                    id: 0,
                    title: "Desarollo web",
                    description: "SebasCode"
                }
            ];

            this.id = 1;

        } else {
            this.id = pelis[pelis.length - 1].id + 1;
        }
        return pelis;
    }

    getLastId() {
        return this.id;
    }

    save(data:any) {
        localStorage.setItem("pelis", JSON.stringify(data));
    }
}