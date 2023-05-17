import { AfterViewInit, ChangeDetectorRef, Component, OnInit } from '@angular/core';

// import { CITY_LIST, GENDER_LIST } from '../../mock/mocks';
import { TokenRes } from '../models/token.model';
import { User } from '../models/user.model';
import { AuthService } from '../services/auth.service';
import { resources } from '../../../resource/resource';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

/**
 * @since March 2022
 * @author Gaurav Singh
 * @Component ptg-ui-signup;
 * @description This component for signup
 **/

@Component({
	selector: 'ptg-ui-signup',
	templateUrl: './signup.component.html',
	styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit, AfterViewInit {
	signupForm!: FormGroup;
	loading = false;
	errorMessage: string;
	// genderList = GENDER_LIST;
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
	resources = resources;

	get f() {
		return this.signupForm.controls;
	}

	constructor(
		private formBuilder: FormBuilder,
		private router: Router,
		private auth: AuthService,
		private cdr: ChangeDetectorRef
	) { }

	ngOnInit(): void {
		this.signupForm = this.formBuilder.group({
			username: ['', [Validators.required]],
			email: ['', [Validators.required, Validators.email]],
			gender: [null, Validators.required],
			city: [null, Validators.required],
			dob: ['', Validators.required],
			password: [null, [Validators.required]],
			confirm: [false, [Validators.requiredTrue]],
		});
	}

	ngAfterViewInit() {
		this.cdr.detectChanges();
	}

	// This method for signup submit
	onSignupSubmit() {
		console.log(this.signupForm.value);
		const payload = {
			name: this.signupForm.value.username,
			email: this.signupForm.value.email,
			gender: this.signupForm.value.gender,
			city: this.signupForm.value.city,
			dob: this.signupForm.value.dob,
			password: this.signupForm.value.password,
		};
		this.userSignup(payload);
	}

	// This method for signUp api call
	userSignup(payload: User) {
		this.loading = true;
		this.auth.signUp(payload).subscribe({
			next: (res: TokenRes) => {
				this.auth.setToken(JSON.stringify(res));
				this.loading = false;
				this.router.navigate(['/dashboard/upload-document']);
			},
			error: (err) => {
				this.errorMessage = err.error.message || 'something went wrong';
				this.loading = false;
			},
			complete: () => { }
		});
	}
	closeAlert(event: any): void {
		this.errorMessage = event;
	  }
}

