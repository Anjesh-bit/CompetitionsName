import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServicesService } from './../../services/auth-services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.page.html',
  styleUrls: ['./adminlogin.page.scss'],
  providers: [AuthServicesService],
})
export class AdminloginPage implements OnInit {
  credentialsofForm: FormGroup;
  user = {
    email: '',
    password: '',
  };

  constructor(
    private Auth: AuthServicesService,
    private router: Router,
    private FormBuild: FormBuilder
  ) {}

  ngOnInit() {
    this.credentialsofForm = this.FormBuild.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]],
    });
  }

  login() {
    this.Auth.login(this.credentialsofForm.value).subscribe((user) => {
      console.log('after login', user);
      let role = user['role'];
      if (role == 'ADMIN') {
        this.router.navigate(['admin-dash-board']);
      }
    });
  }
}
