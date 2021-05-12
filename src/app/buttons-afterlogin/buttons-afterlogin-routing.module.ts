import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ButtonsAfterloginPage } from './buttons-afterlogin.page';

const routes: Routes = [
  {
    path: '',
    component: ButtonsAfterloginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ButtonsAfterloginPageRoutingModule {}
