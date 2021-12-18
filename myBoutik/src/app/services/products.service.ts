import { Injectable } from '@angular/core';
import { map, toArray } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ProductModel } from "../models/product-model";

// Angular
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Upload variables
  task?: AngularFireUploadTask;
  downloadURL: any;

  change: boolean = false;


  public path?: any;
  public file?: any;
  public title?: any;
  public price?: any;
  public srcImage?: any;
  public imageName?: any;
  public product: AngularFirestoreCollection<ProductModel>;
  constructor(protected storage: AngularFireStorage, protected db: AngularFirestore) {
    this.product = this.db.collection(this.path);
  }

  insertImage = (product: ProductModel) => {
    return Promise.resolve(
      this.task = this.storage.upload(this.path + "/" + product.imageName, this.file)
    );
  };


  insertProduct(product: ProductModel) {
    this.db.collection(this.path).add({
      title: product.title,
      price: product.price,
      description: product.description,
      quantity: product.quantity,
      url: product.url,
      imageName: product.imageName,
    });
  }

  updateUrlImage(product: ProductModel) {
    const ref = this.storage.ref(this.path + "/" + this.file.name);
    this.downloadURL = ref.getDownloadURL().subscribe(value => {
      console.log("first", value);
      product.url = value;
      this.update(product).subscribe(() => {
        this.change = true;
        setTimeout(() => {
          this.change = false;
          console.log("finished");
        }, 3000);
      })
    });

  }

  async insertProductDetails(product: ProductModel) {
    const ref = this.storage.ref(this.path + "/" + this.file.name);


    try {

      await this.insertImage(product);
      this.downloadURL = await ref.getDownloadURL().subscribe(value => {
        product.url = value;
        this.insertProduct(product);
      });
    }
    catch (error) {
      console.error(error);
    }
  }

  getAllProducts() {
    return this.db.collection(this.path).snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc: any) => {
          return ({ id: doc.payload.doc.id, ...doc.payload.doc.data() })
        })
      })
    );
  }

  getProduct(id: any): any {
    return new Observable(obs => {
      this.product.doc(id).get().subscribe(res => {
        obs.next({ id: res.id, ...res.data() });
      });
    });
  }

  update(singleProduct: ProductModel) {
    return new Observable(obs => {
      this.product.doc(singleProduct.id).update(singleProduct);
      obs.next();
    });

  }
  delete(id: any) {
    this.db.doc(`${this.path}/${id}`).delete();
  }

  insertToCard(product: ProductModel) {
    this.db.collection("cart").add({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: 1,
      url: product.url,
    });
  }

}
