import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup,FormControl } from '@angular/forms';

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
  myForm: FormGroup;
  public emptype: any;
  public name:any;
  public email:any;
  public mobile:any;
  public gender:any;
  public password:any;
  public conpassword:any;

  validation_messages = {
    'Name': [
      { type: 'required', message: 'name is required' }],
    'Email': [
      { type: 'required', message: 'email is required.' },
      { type: 'pattern', message: 'please enter correct email'} ],
    'Mobile': [
      { type: 'required', message: 'mobile no is required.' },
      { type: 'minlength', message: 'please enter correct number'} ],
    'Password': [
      { type: 'required', message: 'password length 6 to 12' },
      { type: 'pattern', message: 'should contain atleast 1 caps,small,symbol,numb' }],
    'Conpassword': [
      { type: 'required', message: 'password length 6 to 12' },
      { type: 'pattern', message: 'should contain atleast 1 caps,small,symbol,numb' }],
}

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl:
    AlertController,public formbuilder: FormBuilder) {

      this.myForm=formbuilder.group({
        mobile: new FormControl('',Validators.compose([Validators.required,Validators.minLength(10)])),
        name: new FormControl('',Validators.required),
        email: new FormControl('',Validators.compose([Validators.required,Validators.pattern('[a-z A-Z . 0-9]+@[a-z .]+.(com|in)')])),
        gender: new FormControl('', Validators.required),
        pass: new FormControl('', Validators.compose([Validators.required,Validators.minLength(6)])),
        conpass: new FormControl('', Validators.compose([Validators.required,Validators.minLength(6)]))
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
