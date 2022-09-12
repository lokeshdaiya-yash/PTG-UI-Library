import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import { CARD_TYPE, COUNTRY, EXP_MONTH, GENDER_LIST, STATE, TITLE } from '@ptg-angular-app/mock/mocks';

@Component({
  selector: 'ptg-ui-multistep-form-layout',
  templateUrl: './multistep-form-layout.component.html',
  styleUrls: ['./multistep-form-layout.component.scss'],
})
export class MultistepFormLayoutComponent implements OnInit {
  myForm: Array<string>| any
  titleArray = TITLE
  genderList = GENDER_LIST
  stateList = STATE
  countryList = COUNTRY
  cardList = CARD_TYPE
  expMonthList = EXP_MONTH
  firstFormGroup = this._formBuilder.group({
    userName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirm: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    title: [null, [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    email: ['', [Validators.required,Validators.email]],
    phoneNo: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
    zipCode: ['', [Validators.required,  Validators.pattern('^(0|[1-9][0-9]*)$')]],
    state: [null, [Validators.required]],
    address: ['', [Validators.required]],
    country: [null, [Validators.required]],
  });
  thirdFormGroup = this._formBuilder.group({
    cardType: [null, [Validators.required]],
    cardNo: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
    cvv: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
    name: ['', [Validators.required]],
    expMonth: [null, [Validators.required]],
    expyear: ['', [Validators.required, Validators.pattern('^(0|[1-9][0-9]*)$')]],
  })
  isLinear = true;
  constructor(public router:Router, private _formBuilder: FormBuilder, private cdr:ChangeDetectorRef) { 

    
  }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.cdr.detectChanges()
  }

}
