import { Router } from '@angular/router';
import { CompetitionAuthService } from './../../services/competition-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  credentialsofForm1: FormGroup;

  constructor(
    private FormBuild: FormBuilder,
    private CompeteAuth: CompetitionAuthService,
    private Router: Router
  ) {}

  ngOnInit() {
    this.credentialsofForm1 = this.FormBuild.group({
      firstname: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  register() {
    this.CompeteAuth.register(this.credentialsofForm1.value).subscribe();
    this.Router.navigate(['login']);
  }
}
