import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Product } from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {
  p = new Product('Tomate','ax0910',90,'Produit consommable 200g',500);

  public products:Array<Product> = [];

  constructor(private firestore: AngularFirestore) { 
    this.products.push(this.p);
  }

  public getProducts(){
    // return this.products;
    return this.firestore.collection('products').snapshotChanges();
  }

  public addProduct(p:Product){
    // this.products.push(p);
    // return this.products;
    return this.firestore.collection('products').add(p);
  }

  private removeProduct(p: Product) {
    let index=this.products.indexOf(p);
    this.products.splice(index,1);
  }

  public deleteProduct(p: string){
    return this.firestore.doc('products/'+p).delete()
  }
  public getProduct(ref:string) {
    return this.products.filter(item => item.reference === ref)[0];
  }

  private updateProduct(p: Product) {
  }

  public setProductList(list:Product[]){
    this.products.push(...list);
  }
}
