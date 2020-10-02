import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AqiDashboardComponent } from './aqi-dashboard.component';
import { NgxChartsModule }from '@swimlane/ngx-charts';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [AqiDashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    NgxChartsModule,
    //BrowserAnimationsModule
  ]
})
export class AqiDashboardModule { }
