export class ProductModel {
    path?: string;
    id?: string;
    title: string;
    price: string;
    url: string;
    imageName: string;

    constructor() {
        this.title = "";
        this.price = "";
        this.url = "";
        this.imageName = "";
    }

}


