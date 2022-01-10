import { Injectable } from '@angular/core';

import { ProductsService } from "../products.service";

// Angular
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/storage';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class ChaussuresServiceService extends ProductsService {

  constructor(storage: AngularFireStorage, db: AngularFirestore) {
    super(storage, db);
    this.path = "chaussures"
    this.product = this.db.collection(this.path);

  }
}
