/* eslint-disable @nx/enforce-module-boundaries */
/* eslint-disable no-constant-condition */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */

/**
 * @since March 2022
 * @author Bhanu Prakash Sharma
 * @Component ptg-ui-layout;
 * @description This component for layout
 **/

import { Component, OnDestroy, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NavigationData } from '@ptg-angular-app/dashboard/contants';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'ptg-ui-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  menuItems = NavigationData;
  isMenuOpen = true;
  destroyed = new Subject<void>();
  currentScreenSize!: string;
  // Create a map to display breakpoint names for demonstration purposes.
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);

  get selectedPath(): string {
    const path = this.location.path();
    return path;
  }
  constructor(
    breakpointObserver: BreakpointObserver,
    private location: Location
  ) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize =
              this.displayNameMap.get(query) ?? 'Unknown';
          }
        }
      });
  }

  ngOnInit(): void {
    // console.log('this.currentScreenSize', this.currentScreenSize);
  }

  isMenuToggle() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
