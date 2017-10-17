import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  signupData = {
    name: '',
    email: '',
    password: '',
    passwordRetyped: ''
  };

  constructor(public navCtrl: NavController, public navParams: NavParams,
      private alertController: AlertController, private angularAuth: AngularFireAuth) {
    this.signupData.email = this.navParams.get('email');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup() {
    if(this.signupData.password !== this.signupData.passwordRetyped) {
      let alert = this.alertController.create({
        title: 'Error',
        message: 'Your password and your re-entered password does not match each other.',
      	buttons: ['OK']
      });
      alert.present();
      return;
    }

    // Firebase Signup Code
    this.angularAuth.auth.createUserWithEmailAndPassword(this.signupData.email, this.signupData.password)
    .then(auth => {
      // Could do something with the Auth-Response
      console.log(auth);
      auth.updateProfile({displayName: this.signupData.name});
      
      auth.sendEmailVerification().then(function() {
        console.log('Verification email sent');
        
      }).catch(function(error) {
        // An error happened.
        let alert = this.alertController.create({
          title: 'Error',
          message: error.message + ',' + error.code,
          buttons: ['OK']
        });
        alert.present(); 
      });
    })
    .catch(err => {
      //In the future use only the code to get an i18n message to display
      let alert = this.alertController.create({
        title: 'Error',
        message: err.message + ',' + err.code,
        buttons: ['OK']
      });
      alert.present();    
    });
  } 
}
