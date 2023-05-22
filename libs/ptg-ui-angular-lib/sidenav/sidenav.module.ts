import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
    RouterModule.forRoot([]),
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
