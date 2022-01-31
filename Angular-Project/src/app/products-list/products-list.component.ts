import { Component } from '@angular/core';
import {ProductsService} from "./products.service";
import {Observable} from "rxjs";

interface Product{
  name: string;
  price: string;
  image: string;
  show: boolean;
}

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent{
  list: Observable<Product[]> = this.productsService.getProducts();
  constructor(private productsService: ProductsService) { }


}
