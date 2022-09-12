/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-sidenav;
 * @description This component for side navigation/menu
 * @modify Akshay Patidar
**/

import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

import { Component, Input, Output, EventEmitter, ChangeDetectorRef, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'ptg-ui-sidenav1',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent{
  @ViewChild('fixedButton') elRef: ElementRef | any; 
  hidden = true;
  isCollapsed= true
  getMenuId:any
  
  @Input() selectedPath = '';
  @Input() menuItems?: [] | any;
  @Input() isMenuOpen = false;
  @Output() selectMenu = new EventEmitter<any>();
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);
  destroyed = new Subject<void>();
  currentScreenSize!: string;
  getScreenSize:any

  constructor(private router: Router, private route: ActivatedRoute,private  breakpointObserver: BreakpointObserver,
    private cdr:ChangeDetectorRef, private elementRef: ElementRef) {
    
    
   }
   ngOnInit(): void {
    this.breakpointObserver
    .observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ])
    .pipe(takeUntil(this.destroyed))
    .subscribe(result => {
      for (const query of Object.keys(result.breakpoints)) {
        if (result.breakpoints[query]) {
          this.currentScreenSize = this.displayNameMap.get(query) ?? 'Unknown';
        }
      }
      this.customScss()
    });
  }
  toggle(): void {
    this.hidden = !this.hidden; 
  }

  open(): void {
    this.hidden = false;
  }

  close(): void {
    this.hidden = true;
  }

  // Method for navigation on click on menu
  navigate(menuItem: any): void {
    if(typeof menuItem === 'object'){
      if (menuItem && menuItem.disabled === false) {
       // console.log('menuItem----', menuItem);
       this.selectedPath = menuItem.path;
       this.selectMenu.emit(menuItem);
       this.router.navigate([this.selectedPath], { relativeTo: this.route });
      }
    }else{
      this.isCollapsed = !this.isCollapsed
      this.getMenuId = menuItem
    }
  }
  isMenuToggle(){
    this.isMenuOpen = !this.isMenuOpen;
  
      // if(this.getScreenSize.breakpoint['(max-width: 599.98px)']){
      //   x[0].style.width = "45vw";
      // }else{
      //   x[0].style.width = "15vw";
      // }
      this.customScss()
    
  }
  customScss(){
    console.log(this.currentScreenSize);
  
   
    const dom: HTMLElement = this.elementRef.nativeElement;
    const elements = dom.querySelectorAll('.fixed-button');
    console.log(elements);
    
    
     let x:any = document.getElementsByClassName("sidenav-container");
     let btnClass:any =document.getElementsByClassName("fixed-button");
     console.log(btnClass[0]);
     
     if(!this.isMenuOpen){
       x[0].style.width = "0vw";
     }else{
       if(this.currentScreenSize == 'XSmall'){
         x[0].style.width = "35vw";
       }else if(this.currentScreenSize == 'Small'){
        //  btnClass[0].style.top = "35px";
         x[0].style.width = "25vw";
       }else if(this.currentScreenSize == 'Medium'){
        //  btnClass[0].style.top = "35px";
         x[0].style.width = "15vw";
       }else if(this.currentScreenSize == 'Large'){
        // btnClass[0].style.top = "15px";
         x[0].style.width = "15vw";
       }else if(this.currentScreenSize == 'XLarge'){
         x[0].style.width = "15vw";
        //  btnClass[0].style.top = "15px";
       }else{
        // btnClass[0].style.top = "15px";
       }
       this.cdr.detectChanges()
      }

  }
  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

}
