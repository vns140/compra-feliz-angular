import { Component, OnInit, Input } from '@angular/core';
import { Product } from './product';
import { CartService } from '../cart/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private cartService: CartService) {}

  @Input() product: Product;

  ngOnInit() {}

  public addCart() {
    this.cartService.addCart(this.product);
  }
}
