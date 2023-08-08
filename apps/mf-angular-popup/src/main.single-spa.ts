import { NgZone } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NavigationStart, Router } from '@angular/router';
import { singleSpaAngular, getSingleSpaExtraProviders, enableProdMode } from 'single-spa-angular';
import { environment } from './environments/environment';

import { AppModule } from './app/app.module';

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

export const bootstrap = lifecycles.bootstrap;
export const mount = lifecycles.mount;
export const unmount = lifecycles.unmount;
