// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
// const baseUrl = 'http://20.114.244.229:1337/';
//const baseUrl = 'http://localhost:1337/';
const baseUrl = 'http://localhost:3333/';
export const environment = {
  production: false,
  baseUrl:baseUrl,
  login: `${baseUrl}auth/local`,
  signup: `${baseUrl}auth/local/register`,
  msal_postLogoutRedirectUri: "http://localhost:4200",
  msal_redirectUri: "http://localhost:4200",
  msal_clientId:"6d4c9588-9e77-4198-b7a1-ce297cf15e93",
  msal_authority:"https://login.microsoftonline.com/yashtechnologies841.onmicrosoft.com",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.