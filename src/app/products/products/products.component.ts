import { ProductDataService } from '../../core/products/product-data.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-products', 
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: Observable<any>;
  constructor(private productDataService: ProductDataService) { }

  // tslint:disable-next-line:ban-types
  ngOnInit(): void {
    this.products = this.productDataService.getAllProducts();
  }

}
