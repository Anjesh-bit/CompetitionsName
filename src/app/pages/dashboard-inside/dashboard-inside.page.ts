import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { AddCompetitionServicesService } from 'src/app/services/add-competition-services.service';

@Component({
  selector: 'app-dashboard-inside',
  templateUrl: './dashboard-inside.page.html',
  styleUrls: ['./dashboard-inside.page.scss'],
})
export class DashboardInsidePage implements OnInit {
  Users: any = [];
  competitionData = [];
  i: any;
  constructor(
    private CompetitionDash: AddCompetitionServicesService,
    private Router: Router
  ) {}

  ngOnInit() {
    this.Title();
  }

  Title() {
    this.CompetitionDash.getUsersCompetition().subscribe((response) => {
      console.log(response);
      this.Users = response;

      this.competitionData = this.Users.result;
      console.log(this.Users.result);
    });
  }

  removeUser(user, i) {
    if (window.confirm('Are you sure')) {
      this.CompetitionDash.deleteUser(user._id).subscribe(() => {
        this.Users.splice(i, 1);
        console.log('User deleted!');
      });
    }
  }
}
