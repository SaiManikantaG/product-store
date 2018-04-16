import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    public pageTitle: string = 'Product List';
    listFilter: string = 'shirt';
    products: any[] = [
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
