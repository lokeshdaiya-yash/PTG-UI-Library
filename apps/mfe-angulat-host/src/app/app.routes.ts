import { NxWelcomeComponent } from './nx-welcome.component';
import { Route } from '@angular/router';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';

export const appRoutes: Route[] = [
  {
    path: 'mfe-angular-popup-remote',
    loadChildren: () =>
      import('mfe-angular-popup-remote/Module').then(
        (m) => m.RemoteEntryModule
      ),
  },
  {
    path: 'mfe-angular-remote',
    loadChildren: () =>
      import('mfe-angular-remote/Module').then((m) => m.RemoteEntryModule),
  },
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'mfe_react_remote',
      exposedModule: './web-components',
      elementName: 'http-mfe-react-element',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'login',
    component: NxWelcomeComponent,
  },
];
