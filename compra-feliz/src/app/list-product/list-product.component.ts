import { ProductService } from './../product/product.service';
import { Component, OnInit } from '@angular/core';
import { MatListModule} from '@angular/material';
import { Product } from '../product/product';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Product[];
  constructor(private productService: ProductService) {
    this.products = productService.getProducts();
  }

  ngOnInit() {
  }

}
