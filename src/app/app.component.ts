import { CompetitionAuthService } from './services/competition-auth.service';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platf: Platform,
    private splashscreen: SplashScreen,
    private statusBar: StatusBar,
    private authservices: CompetitionAuthService,
    private router: Router
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platf.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashscreen.hide();

      this.authservices.authenticationState.subscribe((state) => {
        if (state) {
          this.router.navigate(['buttons']);
        } else {
          this.router.navigate(['login']);
        }
      });
    });
  }
}
