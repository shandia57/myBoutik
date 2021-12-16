import { Injectable } from '@angular/core';
import { map, toArray } from 'rxjs/operators';


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

  public path: string = "";
  public file?: any;
  public title?: any;
  public price?: any;




  constructor(protected storage: AngularFireStorage, private db: AngularFirestore) { }

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
    this.db.collection(this.path).add({
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
    return this.db.collection(this.path).snapshotChanges().pipe(
      map((changes: any) => {
        return changes.map((doc: any) => {
          return ({ id: doc.payload.doc.id, ...doc.payload.doc.data() })
        })
      })
    );
  }

  get(id: any): any {
    return this.db.collection(this.path).doc(id).get().subscribe((res: any) => {
      return ({ id: res.id, ...res.data() });
    });
  }

  update(id: any) {
    return this.db.collection(this.path).doc(id).update(id);

  }
  delete(id: any) {
    this.db.doc(`films/${id}`).delete();
  }


  // get(id: any): any {
  //   return new Observable(obs => {
  //     this.filmsRef.doc(id).get().subscribe(res => {
  //       obs.next({ id: res.id, ...res.data() });
  //     });
  //   });
  // }

  // update(film: Film) {
  //   return new Observable(obs => {
  //     this.filmsRef.doc(film.id).update(film);
  //     obs.next();
  //   });
  // }
  // delete(id: any) {
  //   this.db.doc(`films/${id}`).delete();
  // }




}
