import {ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WebaccessibilityComponent } from './webaccessibility.component';
import { ButtonComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/button/button/button.component';
import { CalendarComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/calendar/calendar/calendar.component';
import { ChecksComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/checks/checks/checks.component';
import { InputComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/input/input/input.component';
import { RadioComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/radio/radio/radio.component';
import { SelectComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/select/select/select.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LoadingComponent } from '@ptg-ui/libs/ptg-angular/src/lib/ptg-ui/loading/loading/loading.component';
import { NgxLoadingModule } from 'ngx-loading';
import { NgSelectModule } from '@ng-select/ng-select';
import { AuthService } from '@ptg-angular-app/auth/services/auth.service';
import { TranslateModule } from '@ngx-translate/core';

describe('WebaccessibilityComponent', () => {
	let component: WebaccessibilityComponent;
	let fixture: ComponentFixture<WebaccessibilityComponent>;
	const formBuilder: FormBuilder = new FormBuilder();
	let authServiceMock: any;
	let onSignupSubmitMocked:any

	beforeEach(async () => {
		authServiceMock = {
			getDataV1: jest.fn()
		}
		onSignupSubmitMocked= jest.fn();
		await TestBed.configureTestingModule({
			declarations: [WebaccessibilityComponent, InputComponent, CalendarComponent, ChecksComponent, RadioComponent, ButtonComponent, LoadingComponent, SelectComponent],
			imports: [TranslateModule.forRoot(), BsDatepickerModule, FormsModule, ReactiveFormsModule, NgxLoadingModule, NgSelectModule],
			providers: [{ provide: FormBuilder, useValue: formBuilder }, { provide: AuthService, useValue: authServiceMock }]
		})
			.compileComponents();
	});

	beforeEach(() => {
		fixture = TestBed.createComponent(WebaccessibilityComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
	it('Should get controls', () => {
		expect(component.f).toBeTruthy;
	})

	describe('Test ngOninit', () => {
		it('Describe the form builder', () => {
			const form = {
				userName: '',
				email: '',
				gender: 'male',
				city: null,
				dob: undefined,
				password: null,
				confirm: false,
			};
			expect(component.signupForm.value).toEqual(form)
		});
	});
	it('form validation', () => {
		component.signupForm.patchValue({
			userName: 'akshay',
			email: 'akshay@gmail.com',
			gender: 'male',
			city: 'Indore',
			dob: new Date(),
			password: '123456',
			confirm: true,
		});
		expect(component.signupForm.valid).toBeTruthy()
	});

	it('button click event one way', () => {
		const formValue = component.signupForm.value
		component.onSignupSubmit();
		const payload = {
			userName: formValue.userName,
			email: formValue.email,
			gender: formValue.gender,
			city: formValue.city,
			dob: formValue.dob,
			password: formValue.password,
			confirm: formValue.confirm,
		}
		component.userSignup(payload);
	});


});
