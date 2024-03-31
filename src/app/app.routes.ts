import { Routes } from '@angular/router';
import { TableComponent } from './core/table/table.component';
import { NewProductComponent } from './core/new-product/new-product.component';

export const routes: Routes = [
    { path: 'dashboard',title:"DashBoard", component: TableComponent },
    { path: 'newproduct',title:"New Product", component: NewProductComponent }
];
