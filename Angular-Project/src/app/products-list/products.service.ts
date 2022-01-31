import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Product{
  name: string;
  price: string;
  image: string;
  show: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsUrl = 'assets/products.json'
  getProducts(){
    return this.http.get<Product[]>(this.productsUrl);
  }
  constructor(private http: HttpClient) { }
}
