import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CompetitionAuthService } from './services/competition-auth.service';

import { ModelComponent } from './model/model.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, RouterModule } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { ModelForHomeComponent } from './model-for-home/model-for-home.component';
export function jwtOptionsFactory(storage) {
  return {
    tokenGetter: () => {
      return storage.get('access_token');
    },
    whiteListedDomains: ['localhost:3000'],
  };
}

@NgModule({
  declarations: [AppComponent, ModelComponent, ModelForHomeComponent],
  entryComponents: [],
  imports: [
    IonicModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,

    IonicStorageModule.forRoot(),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: [Storage],
      },
    }),

    AppRoutingModule,
    RouterModule,
    RouterTestingModule,
  ],
  providers: [
    InAppBrowser,
    SplashScreen,
    CompetitionAuthService,
    StatusBar,

    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
