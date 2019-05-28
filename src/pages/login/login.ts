import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';

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
  public email:any;
  public password:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private storage: Storage,public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  signup(){
    this.navCtrl.push('SignupPage');
  }

  login(){
    if(this.email && this.password){
      this.storage.set('email',this.email);
      this.events.publish('user:created',this.email);
      this.navCtrl.setRoot(HomePage);

    }
    else{

    }
  }

  changep(){
    this.navCtrl.push('PasswordchangePage');
  }

}
