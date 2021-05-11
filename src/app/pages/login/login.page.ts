import { Router } from '@angular/router';
import { CompetitionAuthService } from './../../services/competition-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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
    private Router: Router
  ) {}

  ngOnInit() {
    this.credentialsofForm = this.FormBuild.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  Click() {
    this.CompeteAuth.login(this.credentialsofForm.value).subscribe();
  }
  adminlogin() {
    this.Router.navigate(['adminlogin']);
  }
  register() {
    this.Router.navigate(['register']);
  }
}
