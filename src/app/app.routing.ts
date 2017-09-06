import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './page/dashboard/dashboard.component';
import {ProfileComponent} from './page/profile/profile.component';
import {ExpenceComponent} from "./page/expence/expence.component";

const appRoutes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'expence/new', component: ExpenceComponent},
  {path: 'login', loadChildren: './login/login.module#LoginModule'}
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true})
