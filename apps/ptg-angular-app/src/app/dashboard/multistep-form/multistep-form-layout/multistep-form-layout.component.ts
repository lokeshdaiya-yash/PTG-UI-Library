import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators,FormGroup } from '@angular/forms';

import { mocksService } from '@ptg-angular-app/common/data-services/mocks.service';
import { ConfirmPasswordValidator } from '@ptg-angular-app/common/utils/validators';


@Component({
  selector: 'ptg-ui-multistep-form-layout',
  templateUrl: './multistep-form-layout.component.html',
  styleUrls: ['./multistep-form-layout.component.scss'],
})
export class MultistepFormLayoutComponent implements OnInit {
  cardList: any = [];
  countryList: any = [];
  genderList: any = [];
  stateList: any = [];
  titleArray: any = [];
  expMonthList: any = [];
  myForm: Array<string> | any;
  firstFormGroup!: FormGroup;
  secondFormGroup!: FormGroup;
  thirdFormGroup!: FormGroup;
  submitted = false;
  submitted1 = false;
  submitted2 = false;
  isLinear = true;
  isLoaded = true;
  constructor(
    public router: Router,
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef,
    private mocksApiService: mocksService
  ) {}

  ngOnInit(): void {
    //card list
    this.mocksApiService.getCardList().subscribe((response) => {
      this.cardList = response?.data[0].attributes.card;
    });
    //country list
    this.mocksApiService.getCountryList().subscribe((response) => {
      this.countryList = response?.data[0].attributes.country;
    });
    //gender list
    this.mocksApiService.getGenderList().subscribe((response) => {
      this.genderList = response?.data[0].attributes.gender;
    });
    //state list
    this.mocksApiService.getStateList().subscribe((response) => {
      this.stateList = response?.data[0].attributes.state;
    });
    //title list
    this.mocksApiService.getSalutationList().subscribe((response) => {
      this.titleArray = response?.data[0].attributes.salutation;
    });
    //exp months
    this.mocksApiService.getExpMonthList().subscribe((response) => {
      this.expMonthList = response?.data[0].attributes.data;
    });
    this.firstFormGroup = this.formBuilder.group(
      {
        userName: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirm: ['', Validators.required],
      },
      {
        validator: ConfirmPasswordValidator('password', 'confirm'),
      }
    );
    this.secondFormGroup = this.formBuilder.group({
      title: [null, [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNo: [
        '',
        [
          Validators.required,
          Validators.pattern('[- +()0-9]{10,12}'),
          Validators.maxLength(10),
        ],
      ],
      zipCode: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      state: [null, [Validators.required]],
      address: ['', [Validators.required]],
      country: [null, [Validators.required]],
    });
    this.thirdFormGroup = this.formBuilder.group({
      cardType: [null, [Validators.required]],
      cardNo: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      name: ['', [Validators.required]],
      expMonth: [null, [Validators.required]],
      expyear: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
    });
  }

  get firstForm() {
    return this.firstFormGroup.controls;
  }
  get secondForm() {
    return this.secondFormGroup.controls;
  }
  get thirdForm() {
    return this.thirdFormGroup.controls;
  }

  firstFormSubmit() {
    this.submitted = true;
   if (this.firstFormGroup.invalid) {
      return;
    }
  }
  secondFormSubmit() {
    this.submitted1 = true;
    if (this.secondFormGroup.invalid) {
      return;
    }
  }
  thirdFormsubmit() {
    this.submitted2 = true;
    if (this.thirdFormGroup.invalid) {
      return;
    }
  }
  onReset() {
    this.submitted = false;
    this.firstFormGroup.reset();
  }
  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
