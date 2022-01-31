import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

interface Order{
  order: number;
  client: string;
  client_email: string;
  delivery_address: string
  total: string;
  show : boolean;
}
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  ordersUrl = 'assets/orders.json'
  getOrders(){
    return this.http.get<Order[]>(this.ordersUrl);
  }
  constructor(private http: HttpClient) { }
}
