import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavComponent } from './sidenav/sidenav.component';
import { CollapseModule } from 'ngx-bootstrap/collapse';


@NgModule({
  declarations: [
    SidenavComponent
  ],
  imports: [
    CommonModule,
    CollapseModule.forRoot(),
  ],
  exports: [
    SidenavComponent
  ]
})
export class SidenavModule { }
