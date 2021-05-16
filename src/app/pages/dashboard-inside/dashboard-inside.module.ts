import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';

import { DashboardInsidePageRoutingModule } from './dashboard-inside-routing.module';

import { DashboardInsidePage } from './dashboard-inside.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardInsidePageRoutingModule,
    HttpClientModule,
  ],
  declarations: [DashboardInsidePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DashboardInsidePageModule {}
