import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import {ReportComponent} from './components/report/report.component';




export const app_routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'report', component: ReportComponent },
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes, { useHash:true });
