import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./form/form.component";
import {ProductsListComponent} from "./products-list/products-list.component";
import {NavbarComponent} from "./navbar/navbar.component";
import {UsersListComponent} from "./users-list/users-list.component";
import {OrdersListComponent} from "./orders-list/orders-list.component";
import {WelcomePageComponent} from "./welcome-page/welcome-page.component";

const routes: Routes = [{path: '', component: NavbarComponent, outlet: 'secondary'},
                        {path: '', component: WelcomePageComponent},
                        {path: 'form', component: FormComponent},
                        {path: 'products', component: ProductsListComponent},
                        {path: 'users', component: UsersListComponent},
                        {path: 'orders', component: OrdersListComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
