/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  Auth,
  createUserWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';

import { Database, set, ref } from '@angular/fire/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.scss',
    '../../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
  ],
})
export class RegisterComponent implements OnInit {
  email = '';
  password = '';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  name: any = '';
  model = '';
  dob = '';
  registerForm!: FormGroup;
  submitted = false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  gender: any = '';
  constructor(
    private fb: FormBuilder,

    public auth: Auth,

    public database: Database
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      city: ['', Validators.required],
      gender: ['', Validators.required],
      password: ['', Validators.required],
      acceptance: [''],
    });
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  submit() {
    this.submitted = true;

    const { name, email, dob, city, gender, password } =
      this.registerForm.value;

    createUserWithEmailAndPassword(this.auth, email, password)
      .then(async (res) => {
        // Signed in

        const user = res.user;

        await updateProfile(user, {
          // displayName: value.username,

          displayName: name,
        });

        set(ref(this.database, 'users/' + name), {
          Username: name,

          Email: email,

          Password: password,

          City: city,

          Gender: gender,

          DOB: dob,
        });

        alert('user created! ');
      })

      .catch((error) => {

        const errorMessage = error.message;

        alert(errorMessage);
      });

    console.log(this.registerForm.value);

    console.log(name);
  }
}
