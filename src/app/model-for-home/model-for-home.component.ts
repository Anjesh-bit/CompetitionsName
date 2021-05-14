import { FormGroup, FormBuilder, Form } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddCompetitionServicesService } from '../services/add-competition-services.service';

@Component({
  selector: 'app-model-for-home',
  templateUrl: './model-for-home.component.html',
  styleUrls: ['./model-for-home.component.scss'],
})
export class ModelForHomeComponent implements OnInit {
  @Input() FirstName: string;
  @Input() LastName: string;
  @Input() Email: string;
  @Input() Password: string;
  updateUserForm: FormGroup;
  id: any;
  Group: any = [];
  Display = [];

  constructor(
    private Route: Router,

    private modelctrl: ModalController,
    private ActivatedRoute: ActivatedRoute,
    private FormBuild: FormBuilder,
    private AddCompete: AddCompetitionServicesService
  ) {
    let id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.AddCompete.GetRegisterID(id).subscribe((res) => {
      this.Group = res;
      this.Display = this.Group.user;
      console.log(this.Display);
    });
  }
  ngOnInit() {}
  ydismiss() {
    this.modelctrl.dismiss();
  }
}
