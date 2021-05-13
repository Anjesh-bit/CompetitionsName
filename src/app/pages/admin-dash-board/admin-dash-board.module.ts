import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { AdminDashBoardPageRoutingModule } from './admin-dash-board-routing.module';

import { AdminDashBoardPage } from './admin-dash-board.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminDashBoardPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [AdminDashBoardPage],
})
export class AdminDashBoardPageModule {}
