import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '../classes/product';
import { ProductServiceService } from '../services/product-service.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.page.html',
  styleUrls: ['./new-product.page.scss'],
})
export class NewProductPage implements OnInit {
  new_product_form: FormGroup;
  new_product:Product=new Product();
  image:any;
  imageURL:any;
  constructor(public toastController: ToastController,
  private productService:ProductServiceService, 
  private router:Router) { }

  ngOnInit() {
      //Validation du formulaire
      this.init();
  }

  createProduct(){
    this.new_product.image=this.image;
    console.log(this.new_product);
    if(this.new_product.name && this.new_product.description
     && this.new_product.qte&& this.new_product.pu 
     && this.new_product.reference){
       this.productService.addProduct(this.new_product).then(res=>{
         this.router.navigateByUrl('/home');
       })
     }else{
        this.presentToast()
     }
     
    // let ss = this.productService.addProduct(p);
    // //console.log(ss);
    // this.router.navigateByUrl('/home');
  }
  imagePath(event){
    if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (event: any) => {
                this.imageURL = (<FileReader>event.target).result;
                // console.log((<FileReader>event.target).result)
            }
            reader.readAsDataURL(event.target.files[0]);
            console.log(reader);
            this.image=event.target.value;
            console.log(reader.readAsDataURL(event.target.files[0]))
        }
  }
   async presentToast() {
    const toast = await this.toastController.create({
      message: 'Unable to add Item, Try again',
      duration: 10000
    });
    toast.present();
  }
  init(){
    this.new_product={
      name:"",
        reference:"",
        qte:0,
        description:"",
        pu:0,
        $key:"",
        image:"",
    }
  }
}
