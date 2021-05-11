import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardInsidePage } from './dashboard-inside.page';

const routes: Routes = [
  {
    path: '',
    component: DashboardInsidePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardInsidePageRoutingModule {}
