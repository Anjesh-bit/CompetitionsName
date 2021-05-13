import { Router } from '@angular/router';
import { CompetitionAuthService } from './../../services/competition-auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';

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
    private toastController: ToastController
  ) {}

  ngOnInit() {
    this.credentialsofForm = this.FormBuild.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  Click() {
    this.CompeteAuth.login(this.credentialsofForm.value).subscribe((res) => {
      this.Toast();
    });
  }
  register() {
    this.Router.navigate(['register']);
  }
  adminlogin() {
    this.Router.navigate(['adminlogin']);
  }
  Toast() {
    let toast = this.toastController.create({
      message: 'Successfull login',
      duration: 3000,
    });
    toast.then((toast) => toast.present());
  }
}
