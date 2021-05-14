import { CompetitionAuthService } from '../services/competition-auth.service';
import { ModelComponent } from '../model/model.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { ModelForHomeComponent } from '../model-for-home/model-for-home.component';
import {
  InAppBrowser,
  InAppBrowserOptions,
} from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {
  constructor(
    private modelctrl: ModalController,
    private Inapp: InAppBrowser,
    private CompeteAuth: CompetitionAuthService,
    private menu: MenuController,
    private Router: Router,
    private Zone: NgZone
  ) {}

  ngOnInit() {}
  async Competitions() {
    const modal = await this.modelctrl.create({
      component: ModelComponent,
      componentProps: {
        competition: 'Creative Competitions',
        instagram: 'Instagram Competitions',
        questions: 'Questions/Answers',
        purchase: 'Require A Purchase',
        entry: 'Simple Entry/Random Winners',
      },
      cssClass: 'mymodal',
    });
    return await modal.present();
  }
  Catagories() {}
  Desktop() {}

  Home() {
    const options: InAppBrowserOptions = {
      location: 'yes',
      zoom: 'no',
      hardwareback: 'no',
      toolbarcolor: '#70C770',
    };
    const home = this.Inapp.create(
      'https://www.competitions.com.au/',
      '_blank',
      options
    );
    home.show();
  }
  survey() {
    const options: InAppBrowserOptions = {
      location: 'yes',
      zoom: 'no',
      hardwareback: 'no',
      toolbarcolor: '#70C770',
    };

    const home = this.Inapp.create(
      'https://www.competitions.com.au/surveys/',
      '_blank',
      options
    );
    home.show();
  }
  Guessing() {
    const options: InAppBrowserOptions = {
      location: 'yes',
      zoom: 'no',
      hardwareback: 'no',
      toolbarcolor: '#70C770',
    };

    const home = this.Inapp.create(
      'https://www.competitions.com.au/guessing-game/',
      '_blank',
      options
    );
    home.show();
  }

  logout() {
    this.CompeteAuth.logout();
  }
  async Account() {
    const modal = await this.modelctrl.create({
      component: ModelForHomeComponent,
      componentProps: {
        FirstName: 'First Name',
        LastName: 'Last Name',
        Email: 'Email',
        Password: 'Password',
      },
      cssClass: 'mymodal',
    });
    return await modal.present();
  }
  Paas() {}
}
