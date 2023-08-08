import { Route } from '@angular/router';
// import { NgModule } from '@angular/core';
// import { APP_BASE_HREF } from '@angular/common';


import { EmptyRouteComponent } from './empty-route/empty-route.component';

export const appRoutes: Route[] = [
    {
        path: '**',
        component: EmptyRouteComponent,
      },
];
// @NgModule({
//     imports: [RouterModule.forRoot(appRoutes)],
  
//     providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  
//     exports: [RouterModule],
//   })

//   export class AppRoutingModule {}
