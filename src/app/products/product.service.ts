import { Injectable } from '@angular/core';
import { Iproduct } from './product';
import { HttpClient, HttpParameterCodec } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { HttpResponse } from 'selenium-webdriver/http';

@Injectable()
export class ProductService {
  /* Throw it as a API endpoint????????
  private __getProductsUrl = 'http://localhost:3000/product';
  getProductInitial() {
    return this.__http
      .get(this.__getProductsUrl)
      .do(data => console.log(`acquired list:${JSON.stringify(data)}url serving our data:`, this.__getProductsUrl))
      .catch(this.handleError);
  }
  Throw it as a API endpoint????????
  */ 

  // Create a service for the front end to use the aggregated list
  private __productUrl = 'http://localhost:3000/ProductList';
  constructor(private __http: HttpClient) {}

  getProducts(): Observable<Iproduct[]> {
    return this.__http
      .get<Iproduct[]>(this.__productUrl)
      .do(data => console.log(`productList: ${JSON.stringify(data)} & url serving our data:`, this.__productUrl))
      .catch(this.handleError);
  }

  private handleError(err: HttpResponse) {
    console.log(err.toString);
    return Observable.throw(err.toString);
  }
}
