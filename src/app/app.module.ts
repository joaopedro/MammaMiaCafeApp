import { ConfirmationEmailPage } from './../pages/confirmation-email/confirmation-email';
import { SignupPage } from './../pages/signup/signup';
import { LoginPage } from './../pages/login/login';
import { MyOrdersPage } from './../pages/my-orders/my-orders';
import { AboutPage } from './../pages/about/about';
import { MenuPage } from './../pages/menu/menu';
import { ContactPage } from './../pages/contact/contact';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpModule, Http } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule} from 'angularfire2/auth';


export function createTranslateLoader(http: Http) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// Initialize Firebase
var config = {
  apiKey: "AIzaSyBuv86u1bkfMXGIyv1fhMFtjIerT-38BK8",
  authDomain: "mammamia-1504917068928.firebaseapp.com",
  databaseURL: "https://mammamia-1504917068928.firebaseio.com",
  projectId: "mammamia-1504917068928",
  storageBucket: "mammamia-1504917068928.appspot.com",
  messagingSenderId: "771953970886"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ContactPage,
    MenuPage,
    AboutPage,
    MyOrdersPage,
    LoginPage,
    SignupPage,
    ConfirmationEmailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [Http]
      }
    }),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ContactPage,
    MenuPage,
    AboutPage,
    MyOrdersPage,
    LoginPage,
    SignupPage,
    ConfirmationEmailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
