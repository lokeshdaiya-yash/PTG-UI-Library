import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'ptg-ui-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
//   gmapDown = false;
//   leafletDown = false;
  
//   @ViewChild(MatSidenav)
//   sidenav!:MatSidenav

//   constructor(private observer:BreakpointObserver){

//   }
//   ngAfterViewInit(){
//     this.observer.observe(['(max-width:800px)']).subscribe((res)=>{
//  if(res.matches && this.sidenav.mode=='over'){
//    this.sidenav.close();
//  }
// //  else{
// //    this.sidenav.mode='side';
// //    this.sidenav.open();
// //  }
//     });
//   }
//   changeDisplay(input: any) {
//     if (input == 'leafletop') {
//       this.leafletDown = !this.leafletDown;
//       this.gmapDown = false;
//     } else if (input == 'gmapop') {
//       this.gmapDown = !this.gmapDown;
//       this.leafletDown = false;
//     }
//   }


}
