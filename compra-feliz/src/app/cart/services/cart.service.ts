
import { Product } from './../../product/product';
import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { ProductCart } from '../models/product-cart';

@Injectable()
export class CartService {

  cart: Cart;
  productCart: ProductCart;
  constructor() { }

  addCart(product: Product) {
    this.productCart = new ProductCart();
    this.productCart.product = product;
    this.productCart.qtde = 1;
    this.cart.products.push(this.productCart);
    this.cart.qtde = this.cart.qtde + 1;
    this.cart.total = this.cart.total + product.price;
  }

  removeCart(product) {
    const index = this.cart.products.indexOf(product.id);
    this.cart.products.splice(index, 1);
    this.cart.qtde = this.cart.qtde - 1;
    this.cart.total = this.cart.total - product.price;
  }

}
