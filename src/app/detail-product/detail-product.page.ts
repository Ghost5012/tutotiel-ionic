import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../classes/product';
import { ProductServiceService } from '../services/product-service.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.page.html',
  styleUrls: ['./detail-product.page.scss'],
})
export class DetailProductPage implements OnInit {
  public product:any  ;

  constructor(private itemService:ProductServiceService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      data => {
          //Check existance de a la reference
          console.log(data.reference); 
          this.product = this.itemService.getProduct(data.reference);
          console.log(this.product); 
        }
  );  

  }

}
