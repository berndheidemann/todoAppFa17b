// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: '',
    authDomain: 'todoapp-7a55d.firebaseapp.com',
    databaseURL: 'https://todoapp-7a55d.firebaseio.com',
    projectId: 'todoapp-7a55d',
    storageBucket: 'todoapp-7a55d.appspot.com',
    messagingSenderId: '134605069062',
    appId: '1:134605069062:web:71eb1a0a451062e787dc87'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
