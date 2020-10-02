import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AqiDashboardComponent } from './components/aqi-dashboard/aqi-dashboard.component';

export const appRoutes: Routes = [
  // redirect to home by default
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: AqiDashboardComponent,
    loadChildren: () => import('./components/aqi-dashboard/aqi-dashboard.module').then(m => m.AqiDashboardModule)
  }];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
