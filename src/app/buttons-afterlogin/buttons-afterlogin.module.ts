import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonsAfterloginPageRoutingModule } from './buttons-afterlogin-routing.module';

import { ButtonsAfterloginPage } from './buttons-afterlogin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonsAfterloginPageRoutingModule
  ],
  declarations: [ButtonsAfterloginPage]
})
export class ButtonsAfterloginPageModule {}
