import { importProvidersFrom } from '@angular/core';
import { bootstrapApplication, BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { APP_ROUTES } from './app/app-routes';
import { AppComponent } from './app/app.component';

/* platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err)); */

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserModule, BrowserAnimationsModule),
    provideRouter(APP_ROUTES),
  ],
}).catch((err) => console.error(err));
