import { AuthServicesGuardService } from './services/auth-services-guard.service';
import { CompetitionAuthguardService } from './services/competition-authguard.service';

import { NgModule } from '@angular/core';
import {
  PreloadAllModules,
  RouterModule,
  Routes,
  CanActivate,
} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'buttons',
    loadChildren: () =>
      import('./buttons/buttons.module').then((m) => m.ButtonsPageModule),
    canActivate: [CompetitionAuthguardService],
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },

  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'adminlogin',
    loadChildren: () =>
      import('./pages/adminlogin/adminlogin.module').then(
        (m) => m.AdminloginPageModule
      ),
  },
  {
    path: 'admin-dash-board',
    loadChildren: () =>
      import('./pages/admin-dash-board/admin-dash-board.module').then(
        (m) => m.AdminDashBoardPageModule
      ),
  },
  {
    path: 'dashboard-inside',
    loadChildren: () =>
      import('./pages/dashboard-inside/dashboard-inside.module').then(
        (m) => m.DashboardInsidePageModule
      ),
  },
  {
    path: 'update/:id',
    loadChildren: () =>
      import('./pages/update/update.module').then((m) => m.UpdatePageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
