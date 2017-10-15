import { SignupPage } from './../signup/signup';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginData = {
    email: '',
    password: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams,
      private angularAuth: AngularFireAuth, private toastController: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    // Login Code here
    this.angularAuth.auth.signInWithEmailAndPassword(this.loginData.email, this.loginData.password)
    .then(auth => {
      // Do custom things with auth
      console.log(auth);
      
    })
    .catch(err => {
      // In the future use only the code to get an i18n message for the user
      let toast = this.toastController.create({
        message: err.message,
        duration: 1000
      });
      toast.present();
    });
  }
 
  signup() {
    this.navCtrl.push(SignupPage, { email: this.loginData.email });
  }

}
