/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../auth/models/user.model';
import { AuthService } from '../../auth/services/auth.service';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'ptg-ui-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  userDetails: any;
  userName: any;
  constructor(
    private auth: AuthService,
    private router: Router,
    private user: UserService
  ) { }

  ngOnInit() {
    let loggedUser: any = localStorage.getItem('userdata');
    console.log(loggedUser);
    loggedUser = JSON.parse(loggedUser);
    this.user.getUserData({ userId: loggedUser.id }).subscribe({
      next: (res: any) => {
        console.log(res);
        this.userDetails = res;
        console.log(this.userDetails, this.userDetails.name);
        this.user.setUsername(this.userDetails.data.name);
        this.auth.setIsPasswordChangedFlag(res.data.isPasswordChange);
        console.log('header ', res.data.isPasswordChange)
      },
      error: (err) => {
        console.log(err);
        if (err.status === 401 || err.message == "Unauthorized!") {
          localStorage.removeItem('userdata');
          this.router.navigate(['/auth'])
        }
      },
      complete: () => { },
    });
    this.userName = this.user.getLoggedUserName();
    this.getInitials(this.userName);
  }
  //Method for Logout
  logout() {
    this.auth.logout();
    this.router.navigate(['auth/login']);
  }

  getInitials(name: Observable<string>) {
    name.subscribe({
      next: (res) => {
        let splitname = res.split(" ");
        console.log('splited name: ', splitname);
        let gotInitials = splitname[0]?.charAt(0) + splitname[1]?.charAt(0);
        this.userName = gotInitials.toUpperCase();
      }
    })
  }
}
