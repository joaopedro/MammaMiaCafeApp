import { ConfirmationEmailPage } from './../pages/confirmation-email/confirmation-email';
import { MyOrdersPage } from './../pages/my-orders/my-orders';
import { AboutPage } from './../pages/about/about';
import { MenuPage } from './../pages/menu/menu';
import { ContactPage } from './../pages/contact/contact';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, ToastController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TranslateService } from '@ngx-translate/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, 
          public translate: TranslateService, private angularAuth: AngularFireAuth, 
          private toastController: ToastController) {
    this.angularAuth.authState.subscribe( user => this.decideRootPage(user));

    this.initializeApp();

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');
    translate.use(translate.getBrowserLang());
    this.angularAuth.auth.languageCode = translate.getBrowserLang();
    
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'HOME', component: HomePage, icon: 'home' },
      { title: 'MY_ORDERS', component: MyOrdersPage, icon: 'basket' },
      { title: 'MENU', component: MenuPage, icon: 'cafe' },
      { title: 'FEDDBACK', component: ContactPage, icon: 'mail' },
      { title: 'ABOUT', component: AboutPage, icon: 'map' }
    ];
  }

  decideRootPage(user){
    if(!user)
    this.rootPage = LoginPage;
    else
      if(user.emailVerified){
        this.rootPage = HomePage;
        let toast = this.toastController.create({
          message: 'Welcome ' + user.displayName,
          duration: 1000
        });
        toast.present();
      }
      else
        this.rootPage = ConfirmationEmailPage;

  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.      
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  signOut() {
    this.angularAuth.auth.signOut();
  }  
}
