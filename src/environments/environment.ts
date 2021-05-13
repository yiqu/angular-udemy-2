// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appTitle: "Health Manager",
  logoUrl: "assets/banner/logo.png",
  firebaseConfig: {
    apiKey: "AIzaSyD1QY66y3XZvP0CSj3eHE2usFbRXCjvWv0",
    authDomain: "ngrx-qu.firebaseapp.com",
    databaseURL: "https://ngrx-qu.firebaseio.com",
    projectId: "ngrx-qu",
    storageBucket: "ngrx-qu.appspot.com",
    messagingSenderId: "183273342773",
    appId: "1:183273342773:web:072e9e2708641a13156e7c",
    measurementId: "G-GF45R7V8Z9"
  },
  reduxMetaLogUserActions: false,
  reduxMetaLogNgrxActions: false
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
