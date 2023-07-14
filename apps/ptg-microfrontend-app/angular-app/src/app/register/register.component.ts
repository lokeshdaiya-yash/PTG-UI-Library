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
  signInWithEmailAndPassword,
  updateProfile,
} from '@angular/fire/auth';

import { Database, set, ref, update } from '@angular/fire/database';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: [
    './register.component.scss',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
  ],
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';
  name: any = '';
  model: string = '';
  dob: string = '';
  registerForm!: FormGroup;
  submitted: boolean = false;
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
        const errorCode = error.code;

        const errorMessage = error.message;

        alert(errorMessage);
      });

    console.log(this.registerForm.value);

    console.log(name);
  }
}
