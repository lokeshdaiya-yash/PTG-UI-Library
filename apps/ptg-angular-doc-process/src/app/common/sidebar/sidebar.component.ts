import { Component, OnInit } from '@angular/core';
import {
  faFloppyDisk,
  faCloudArrowUp,
  faArrowRight,
  faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'ptg-ui-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  isExpanded: boolean = false;
  classApplied:boolean = false;
  sidenavWidth:number = 4;
  ngStyle: string;
  isOpen:boolean = false;
  isFocusIn:boolean = false;
  isMouseIn:boolean = false;
  loadLeftIcon: boolean = false;
  //icons
  faFloppyDisk = faFloppyDisk;
  faCloudArrowUp = faCloudArrowUp;
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;

  constructor() {}

  ngOnInit(): void {}

  toggleSidenav() {
    this.isOpen = !this.isOpen;
    setTimeout(() => {
      this.loadLeftIcon = !this.loadLeftIcon;
    }, 250);
  }

  get opened(): boolean {
    return this.isOpen;
  }
}
