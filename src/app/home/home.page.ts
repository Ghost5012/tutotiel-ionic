import { Component } from '@angular/core';
import { Product } from '../classes/product';
import { ProductServiceService } from '../services/product-service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public products:Array<Product>=[];
  

  constructor(public toastController: ToastController, private productService:ProductServiceService) {
    this.getProducts();
    console.log(this.products);
  }

  ionViewWillEnter(){
    // this.productService.getProducts();
    //console.log(this.products);
  } 

  getProducts(){
    console.log('getting products');
    this.productService.getProducts().subscribe((res)=>{
      Promise.resolve(this.products=res.map((val)=>{
        console.log(val);
        return {
          $key: val.payload.doc.id,
        ...val.payload.doc.data() as Product
        };
      }).sort((a,b)=>a.name.localeCompare(b.name))
    ).then(()=>{
      this.productService.setProductList(this.products);
    })
    });
  }

  deleteProduct(p:string){
    this.productService.deleteProduct(p).then(()=>{
      this.presentToast()
    })
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Product Deleted Successfully',
      duration: 2000
    });
    toast.present();
  }

  

}
