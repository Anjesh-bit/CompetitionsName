import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { AddCompetitionServicesService } from 'src/app/services/add-competition-services.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-dashboard-inside',
  templateUrl: './dashboard-inside.page.html',
  styleUrls: ['./dashboard-inside.page.scss'],
})
export class DashboardInsidePage implements OnInit {
  Users: any = [];
  rows = [];

  constructor(
    private CompetitionDash: AddCompetitionServicesService,
    private menu: MenuController,
    private Router: Router
  ) {}

  ngOnInit() {
    this.Title();
  }

  Title() {
    this.CompetitionDash.getUsersCompetition().subscribe((response) => {
      this.Users = response;

      this.rows = this.Users.result;
      console.log(this.Users.result);
    });
  }

  removeUser(user, i) {
    if (window.confirm('Are you sure')) {
      this.CompetitionDash.deleteUser(user._id).subscribe(() => {
        this.rows.splice(i, 1);
        console.log('User deleted!');
      });
    }
  }
  Navigate(user) {
    this.Router.navigateByUrl(`/update/${user._id}`);
  }

  changeNav(nav) {
    if (nav === 'add') {
      this.menu.close('second');
      this.Router.navigate(['/admin-dash-board']);
    }
  }
}
