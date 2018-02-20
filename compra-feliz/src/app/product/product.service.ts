import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  constructor() {}

  getProducts() {
    return [
      {
        id: 1,
        name: 'Smart TV LED 32" PHILCO',
        image: 'assets/images/tv-philco.jpg',
        price: 1.477
      },
      {
        id: 2,
        name: 'Iphone 6 32GB Cinza Espacial',
        image: 'assets/images/iphone.jpg',
        price: 1.899
      },
      {
        id: 3,
        name: 'Smartphone Motorola Moto X4 Dual',
        image: 'assets/images/motorola.jpg',
        price: 1.322
      }
    ];
  }
}
