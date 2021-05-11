import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardInsidePageRoutingModule } from './dashboard-inside-routing.module';

import { DashboardInsidePage } from './dashboard-inside.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardInsidePageRoutingModule
  ],
  declarations: [DashboardInsidePage]
})
export class DashboardInsidePageModule {}
