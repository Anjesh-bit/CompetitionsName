import { Router } from '@angular/router';
import { CompetitionAuthService } from './../../services/competition-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentialsofForm: FormGroup;

  constructor(
    private FormBuild: FormBuilder,
    private CompeteAuth: CompetitionAuthService,
    private Router: Router,
    private platf: Platform,
    private splashscreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.CompetitionApp();
  }

  ngOnInit() {
    this.credentialsofForm = this.FormBuild.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  CompetitionApp() {
    this.CompeteAuth.authenticationState.subscribe((state) => {
      if (state) {
        this.Router.navigate(['buttons-afterlogin']);
        console.log(state);
      } else {
        this.Router.navigate(['login']);
      }
    });
  }

  Click() {
    this.CompeteAuth.login(this.credentialsofForm.value).subscribe();
  }
}
