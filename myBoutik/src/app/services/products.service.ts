import { Injectable } from '@angular/core';
import { map, toArray } from 'rxjs/operators';


// Angular
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';




@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // Upload variables
  task?: AngularFireUploadTask;
  downloadURL: any;

  public path: string = "";
  public file?: any;
  public title?: any;
  public price?: any;




  constructor(protected storage: AngularFireStorage, protected db: AngularFireDatabase, private dbb: AngularFirestore) { }

  insertImage = () => {
    return Promise.resolve(
      this.task = this.storage.upload(this.path + "/" + this.file.name, this.file)
    );
  };

  insertProduct(...details: any[]) {
    // this.db.list(this.path).push({
    //   title: details[0],
    //   price: details[1],
    //   url: details[2]
    // })
    this.dbb.collection(this.path).add({
      title: details[0],
      price: details[1],
      url: details[2]
    });
  }

  async insertProductDetails() {
    const ref = this.storage.ref(this.path + "/" + this.file.name);

    try {

      await this.insertImage();
      this.downloadURL = await ref.getDownloadURL().subscribe(value => {
        this.insertProduct(this.title, this.price, value);
      });
    }
    catch (error) {
      console.error(error);
    }
  }

  getAllProducts() {
    return this.dbb.collection(this.path).snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc: any) => {
          return ({ id: doc.payload.doc.id, ...doc.payload.doc.data() })
        })
      })
    );
  }




}
