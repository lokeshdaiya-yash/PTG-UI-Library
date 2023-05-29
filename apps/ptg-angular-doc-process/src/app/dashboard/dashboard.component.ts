import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../common/header/header.component';
import { FooterComponent } from '../common/footer/footer.component';
import { SidebarComponent } from '../common/sidebar/sidebar.component';
@Component({
  selector: 'ptg-ui-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
