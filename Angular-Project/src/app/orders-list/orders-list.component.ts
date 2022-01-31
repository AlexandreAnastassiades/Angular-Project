import { Component } from '@angular/core';
import {OrdersService} from "./orders.service";
import {Observable} from "rxjs";

interface Order{
  order: number;
  client: string;
  client_email: string;
  delivery_address: string
  total: string;
  show : boolean;
}
@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent {
  list: Observable<Order[]> = this.ordersService.getOrders();
  constructor(private ordersService: OrdersService) { }


}
