import { Injectable } from '@angular/core';
import { Iproduct } from './product';

@Injectable()
export class ProductService{

    getProducts(): Iproduct[]{
        return [
            {
                "name": "shirt",
                "price": 15
              },
              {
                "name": "basketball",
                "price": 9.99
              },
              {
                "name": "hat",
                "price": 20
              },
              {
                "name": "headphones",
                "price": 49
              },
              {
                "name": "pen",
                "price": 1.99
              },
              {
                "name": "sun glasses",
                "price": 65
              }
        ]
    }

}