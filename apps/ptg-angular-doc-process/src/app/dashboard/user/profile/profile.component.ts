import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { resources } from "../../../../resource/resource";
import { UserService } from '../../../services/user.service';
import * as moment from 'moment';
import { UserModel } from '../models/user-model';


@Component({
  selector: 'ptg-ui-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  loading: boolean = false;
  errorMessage: string | null;
  successMessage: string | null;
  userDetailsForm: FormGroup;
  resources = resources;
  isReadOnly: boolean = true;
  emailDiabled: boolean = true;
  isEditview: boolean = false;
  loggedUserid: string;
  userDetails: any;
  genderList = [
		{
			id: '1',
			name: 'male',
			default: true,
		},
		{
			id: '2',
			name: 'female',
		},
		{
			id: '3',
			name: 'other',
		},
	];
	// cityList = CITY_LIST;
  constructor(private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit(): void {
    this.userDetailsForm = this.formBuilder.group({
      name: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
			gender: [null, Validators.required],
			city: [null, Validators.required],
			dob: ['', Validators.required],
    });
    let loggedUser: any = localStorage.getItem('userdata');
    this.loggedUserid = JSON.parse(loggedUser).id;
    this.getUserDetails();
  }

  getUserDetails(){
    this.userService.getUserData({ userId: this.loggedUserid }).subscribe({
      next: (res:any) => {
        this.userDetails = res.data;
        this.userService.setUsername(this.userDetails.name);
        this.userDetailsForm.patchValue({
          name: this.userDetails.name,
          email: this.userDetails.email,
          gender: this.userDetails.gender,
          dob: moment(this.userDetails.dob).format('MM-DD-YYYY'),
          city: this.userDetails.city,
        });
      },
      error: (err) => {
           },
      complete: () => {},
    });
  }

  changeView(){
    this.isEditview = true;
    this.isReadOnly = false;
  }

  closeAlert(event: any): void {
    this.errorMessage = event;
    this.successMessage = event;
  }

  onSubmit(){
    if(!this.userDetailsForm.valid || !this.isEditview){
      return;
    }
    const payload:UserModel = {
      userId: this.loggedUserid,
			name: this.userDetailsForm.value.name,
			email: this.userDetailsForm.value.email,
			gender: this.userDetailsForm.value.gender,
			city: this.userDetailsForm.value.city,
			dob: this.userDetailsForm.value.dob
		};
    this.loading = true;
    this.userService.updateUserdetails(payload).subscribe({
      next: (res:any)=>{
        this.isEditview = false;
        this.isReadOnly = true;
        this.getUserDetails();
        this.loading = false;
        this.successMessage = res.message;
      }
    })
  }

  cancelToUpdatedetails(){
    this.isEditview = false;
    this.isReadOnly = true;
    this.getUserDetails();
  }

}
