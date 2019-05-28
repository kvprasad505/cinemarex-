import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PasswordchangePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passwordchange',
  templateUrl: 'passwordchange.html',
})
export class PasswordchangePage {
  otp :any=false;
  email :any= true;
  pass : any=false;
  btn1 : any=true;
  btn2 : any=false;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordchangePage');
  }

  fncbtn1(){
    this.email=false;
    this.otp=true;
    this.pass=true;
    this.btn1=false;
    this.btn2=true;
  }

  fncbtn2(){
    this.email=true;
    this.otp=false;
    this.pass=false;
    this.btn2=false;
    this.btn1=true;
  }

}
