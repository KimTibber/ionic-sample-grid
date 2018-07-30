import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewportPage } from './viewport';

@NgModule({
  declarations: [
    ViewportPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewportPage),
  ],
})
export class ViewportPageModule {}
