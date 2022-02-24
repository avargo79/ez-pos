import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { HeaderComponent } from './components/header/header.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { LangingComponent } from './pages/langing/langing.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { LocationComponent } from './pages/location/location.component';
import { LandingComponent } from './pages/landing/landing.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, HeaderComponent, LangingComponent, ProfileComponent, LocationComponent, LandingComponent],
  imports: [BrowserModule, ServiceWorkerModule.register('ngsw-worker.js', {
  enabled: environment.production,
  // Register the ServiceWorker as soon as the app is stable
  // or after 30 seconds (whichever comes first).
  registrationStrategy: 'registerWhenStable:30000'
})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
