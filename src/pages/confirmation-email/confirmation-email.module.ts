import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConfirmationEmailPage } from './confirmation-email';

@NgModule({
  declarations: [
    ConfirmationEmailPage,
  ],
  imports: [
    IonicPageModule.forChild(ConfirmationEmailPage),
  ],
})
export class ConfirmationEmailPageModule {}
