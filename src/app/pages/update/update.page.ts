import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AddCompetitionServicesService } from 'src/app/services/add-competition-services.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {
  updateUserForm: FormGroup;
  id: any;
  constructor(
    private userCrudService: AddCompetitionServicesService,
    private activatedRoute: ActivatedRoute,
    public formBuilder: FormBuilder,
    private router: Router
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
  }

  ngOnInit() {
    this.fetchUser(this.id);
    this.updateUserForm = this.formBuilder.group({
      Title: [''],
      Description: [''],
      AuthorName: [''],
    });
  }
  fetchUser(id) {
    this.userCrudService.getCompetitionId(id).subscribe((data) => {
      console.log(data);
      this.updateUserForm.setValue({
        Title: data['Title'],
        Description: data['Description'],
        AuthorName: data['AuthorName'],
      });
    });
  }
  onSubmit() {
    if (!this.updateUserForm.valid) {
      return false;
    } else {
      this.userCrudService
        .updateUser(this.id, this.updateUserForm.value)
        .subscribe((res) => {
          this.updateUserForm.reset();
          this.router.navigate(['dashboard-inside', { item: res }]);
        });
    }
  }
}
