import { Routes } from '@angular/router';
import { TableComponent } from './core/table/table.component';
import { ChartComponent } from './core/chart/chart.component';

export const routes: Routes = [
    { path: 'dashboard',title:"BackOffice App: DashBoard", component: TableComponent },
    { path: 'chart',title:"BackOffice App: Chart", component: ChartComponent }
];
