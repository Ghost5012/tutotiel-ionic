import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.page.html',
  styleUrls: ['./update-product.page.scss'],
})
export class UpdateProductPage implements OnInit {

  constructor(private router:Router, private formBuilder:FormBuilder,private productService:ProductServiceService) { }

  ngOnInit() {

}

goBack() {
    this.router.navigate(['/home']);
}

}
