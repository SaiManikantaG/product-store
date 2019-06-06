import { Component, OnInit } from '@angular/core';
import { Iproduct } from './product';
import { ProductService } from './product.service';

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  public pageTitle: string = 'Product List';
  __listFilter: string;
  errorMessage: string;
  get listFilter() {
    return this.__listFilter;
  }
  set listFilter(value: string) {
    this.__listFilter = value;
    this.filteredProducts = this.__listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  constructor(private __productService: ProductService) {
    this.listFilter = '';
  }

  performFilter(filterBy: string): Iproduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Iproduct) => product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  filteredProducts: Iproduct[];
  products: Iproduct[] = [];
  ngOnInit(): void {
    this.__productService.getProducts().subscribe(products => {
      this.products = products;
      this.filteredProducts = this.products;
    }, error => (this.errorMessage = <any>error));

    /* Throw it as a API endpoint????????
    var xpath = [];
    this.__productService.getProductInitial().subscribe(result => {
      this.products = xpath;
      console.log(`xpath:${xpath}`);
      //productApi(xpath)
    }); */
/* Build similiar to this?
    var productApi = function(resp) {
  
        app.get('/api/products', function(req, res, body) {
            console.log(`Products::${JSON.stringify(resp)}`);
            res.status(200).send(resp);
        }); 
    };*/
  }
}
