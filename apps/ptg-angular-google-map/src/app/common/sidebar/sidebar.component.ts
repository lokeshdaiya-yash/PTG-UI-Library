import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';
import { navbarData } from './nav-data';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
 opened=false;
  gmapDown = false;
  leafletDown = false;
  mapboxDown=false;
  isExpanded = true;
  showSubmenu: boolean = false;
  showSubSubMenu: boolean = false;
  isShowing = false;
  isExpanded1 = true;
  showSubmenu1: boolean = false;
  showSubSubMenu1: boolean = false;
  showSubmenu2: boolean = false;
  showSubSubMenu2: boolean = false;
  isShowing1 = false;
 navData=navbarData;
 
  
  mouseenter() {
    if (!this.isExpanded) {
      this.isShowing = true;
    }
  }

  mouseleave() {
    if (!this.isExpanded) {
      this.isShowing = false;
    }
  }
  mouseenter1() {
    if (!this.isExpanded1) {
      this.isShowing1 = true;
    }
  }

  mouseleave1() {
    if (!this.isExpanded1) {
      this.isShowing1 = false;
    }
  }

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav
  constructor(private router: Router, private observer: BreakpointObserver ) {

  }
  // data=this.sidenav
  // ngOnInit(): void {
    // this.shared.setData(this.data)
  // }
  
 

  ngAfterViewInit() {
    this.observer.observe(['(max-width:800px)']).subscribe((res) => {
      if (res.matches) {
        this.sidenav.mode = 'over';
        this.sidenav.close();
      }
      else {
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
  }
  changeDisplay(input: any) {
    if (input == 'leafletop') {
      this.leafletDown = !this.leafletDown;
      this.gmapDown = false;
    } else if (input == 'gmapop') {
      this.gmapDown = !this.gmapDown;
      this.leafletDown = false;
    }
    else if (input == 'mapboxpop') {
      this.mapboxDown = !this.mapboxDown;
      this.mapboxDown = false;
    }
  }
}
