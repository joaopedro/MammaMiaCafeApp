import { AngularFireAuth } from 'angularfire2/auth';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ConfirmationEmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmation-email',
  templateUrl: 'confirmation-email.html',
})
export class ConfirmationEmailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private angularAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmationEmailPage');
  }

  resendEmail(){
    this.angularAuth.auth.currentUser.sendEmailVerification().then(function() {
      console.log('Verification email reSent');
      
    }).catch(function(error) {
      // An error happened.
      let alert = this.alertController.create({
        title: 'Error',
        message: error.message + ',' + error.code,
        buttons: ['OK']
      });
      alert.present(); 
    });
  }
}
