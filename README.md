# Health Manager

[![Build Status](https://travis-ci.com/yiqu/angular-udemy-2.svg?branch=main)](https://travis-ci.com/yiqu/angular-udemy-2)


Stable: https://my-health.web.app/

Dev: https://yiqu.github.io/angular-udemy-2/

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Deploy

Deploy to Firebase Hosting
You can deploy now or later. To deploy now, open a terminal window, then navigate to or create a root directory for your web app.

Sign in to Google

firebase login
Initiate your project
Run this command from your app’s root directory:


firebase init
Specify your site in firebase.json
Add your site name to the firebase.json configuration file. After you get set up, see the best practices for multi-site deployment.


{
  "hosting": {
    "site": "my-health",
    "public": "public",
    ...
  }
}
When you’re ready, deploy your web app
Put your static files (e.g., HTML, CSS, JS) in your app’s deploy directory (the default is “public”). Then, run this command from your app’s root directory:


firebase deploy --only hosting:my-health
After deploying, view your app at my-health.web.app



