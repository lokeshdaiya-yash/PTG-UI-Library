import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { navbarData } from '../sidebar/nav-data';
import { Router } from '@angular/router';
import { BreakpointObserver } from '@angular/cdk/layout';
import { headerData } from './header-data';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  headerData=headerData;
  
  @Input()
  inputSideNav!: MatSidenav;

}
