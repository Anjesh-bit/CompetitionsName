import { AddCompetitionServicesService } from './../../services/add-competition-services.service';
import { Router } from '@angular/router';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, NgZone } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-admin-dash-board',
  templateUrl: './admin-dash-board.page.html',
  styleUrls: ['./admin-dash-board.page.scss'],
})
export class AdminDashBoardPage implements OnInit {
  data = '';
  DashBoardCredentials: FormGroup;
  constructor(
    public CompeteAuth: AddCompetitionServicesService,
    private FormBuild: FormBuilder,
    private menu: MenuController,
    private Router: Router,
    private Zone: NgZone
  ) {}

  ngOnInit() {
    this.DashBoardCredentials = this.FormBuild.group({
      Title: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      AuthorName: ['', [Validators.required]],
    });
  }
  AddCompetition() {
    if (!this.DashBoardCredentials.valid) {
      return false;
    } else {
      this.CompeteAuth.AddCompetition(
        this.DashBoardCredentials.value
      ).subscribe((res) => {
        this.Zone.run(() => {
          this.DashBoardCredentials.reset();

          this.Router.navigate(['dashboard-inside', { item: res }]);
          console.log('item', { item: res });
        });
      });
    }
  }

  changeNav(nav) {
    if (nav === 'list') {
      this.menu.close('first');
      this.Router.navigate(['dashboard-inside']);
    }
  }
}
