import { NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NavigationStart, Router } from '@angular/router';
import { singleSpaAngular, getSingleSpaExtraProviders, enableProdMode } from 'single-spa-angular';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const lifecycles = singleSpaAngular({
  bootstrapFunction: () =>
    platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule),
  template: '<ptg-ui-library-root />',
  NgZone,
  Router,
  NavigationStart,
});

// export const bootstrap = [
//   lifecycles.bootstrap,
//   () => resolveAsyncServices([
//   ])
// ]

export const bootstrap = lifecycles.bootstrap;

// export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;


// eslint-disable-next-line @typescript-eslint/no-unused-vars
// function resolveAsyncServices(arg0: never[]) {
//   throw new Error('Function not implemented.');
// }

