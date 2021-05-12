import { Component } from '@angular/core';
import { Router } from '@angular/router';
/*
import { Platform } from '@ionic/angular';

import { Storage } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CompetitionAuthService } from './services/competition-auth.service';
*/
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) /*
    private platf: Platform,
    private splashscreen: SplashScreen,
    private statusBar: StatusBar,

    private authservices: CompetitionAuthService
    */
  {
    //this.initializeApp();
  }
  /*
  initializeApp() {
    this.platf.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashscreen.hide();

      this.authservices.authenticationState.subscribe((state) => {
        if (state) {
          this.router.navigate(['buttons-afterlogin']);
        } else {
          this.router.navigate(['login']);
        }
      });
    });
  }
  */

  login() {
    this.router.navigate(['/login']);
  }
  Registration() {
    this.router.navigate(['/register']);
  }
  Admin() {
    this.router.navigate(['/adminlogin']);
  }
}
