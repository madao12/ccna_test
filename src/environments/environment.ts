// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDeutqCCssFWA5C21XinhReSNOfVmkli_E',
    authDomain: 'quiz-52fbc.firebaseapp.com',
    databaseURL: 'https://quiz-52fbc.firebaseio.com',
    projectId: 'quiz-52fbc',
    storageBucket: 'quiz-52fbc.appspot.com',
    messagingSenderId: '530233509551'
  }
};
