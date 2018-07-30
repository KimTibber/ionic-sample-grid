import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ViewportPage } from '../viewport/viewport';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {

  }

  move() {
    this.navCtrl.push(ViewportPage);
  }

  simpleAlert() {
    let alert = this.alertCtrl.create({
      title: '해고 통보',
      subTitle: 'You are fired',
      message: '당신은 오늘부로 짤렸습니다',
      buttons: ['넵 집에갈게요']
    });
    alert.present();
  }

  redfill(data) {
    let alert = this.alertCtrl.create({
      title: '빨간약!',
      message: '당신은 빨간약을 선택하였습니다',
      buttons: ['넹']
    });
    alert.present();
  }

  bluefill(data) {
    let alert = this.alertCtrl.create({
      title: '파란약!',
      message: '당신은 파란약을 선택하였습니다',
      buttons: ['넵']
    });
    alert.present();
  }

  confirmAlert() {
    let alert = this.alertCtrl.create({
      title: '약을 골라봅시다',
      message: '어떤 알약을 선택하시겠습니까?',
      buttons: [
        {
          text: '빨간약',
          handler: data => {
            this.redfill(data);
          }
        },
        {
          text: '파란약',
          handler: data => {
            this.bluefill(data);
          }
        }
      ]
    });
    alert.present();
  }

}
