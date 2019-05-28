import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MoviesPage } from '../pages/movies/movies';
import { ShowPage } from '../pages/show/show';
import { ContactusPage } from '../pages/contactus/contactus';
import { EventsPage } from '../pages/events/events';
import { Events } from 'ionic-angular';
import { ProfilePage } from '../pages/profile/profile';
import { UploadPage } from '../pages/upload/upload';
import { WatchlistPage } from '../pages/watchlist/watchlist';
import { OrderhistoryPage } from '../pages/orderhistory/orderhistory';
import { PackagePage } from '../pages/package/package';




import { Storage } from '@ionic/storage';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;


  pages: Array<{title: string, component: any,index: any, icon:any}>
  menu1: Array<{title: string, component: any,index: any, icon:any}>
  menu2: Array<{title: string, component: any,index: any, icon:any}>



  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,public events: Events,
    public storage: Storage,)
  {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.menu1 = [
      {icon:'log-in', title: 'Login/Signup', component: LoginPage, index:0},
      {icon:'home', title: 'Home', component: HomePage, index:0 },
      {icon:'pricetags', title: 'Packages', component: PackagePage, index:0},
      { icon:'list', title: 'List', component: ListPage, index:0 },
      {icon:'logo-youtube', title: 'Movies', component: MoviesPage, index:0},
      {icon:'desktop', title: 'Tv Shows', component: ShowPage, index:0},
      { icon:'videocam', title: 'Live Events', component: EventsPage, index:0},
      {icon:'call', title: 'Contact Us', component: ContactusPage, index:0}

    ];

    this.menu2 = [
      { icon:'home', title: 'Home', component: HomePage , index:0},
      { icon:'person', title: 'Profile', component: ProfilePage , index:0},
      {icon:'pricetags', title: 'Packages', component: PackagePage, index:0},
      { icon:'cloud-upload', title: 'Upload movie', component: UploadPage , index:0},
      { icon:'list',title: 'List', component: ListPage, index:0 },
      {icon:'logo-youtube', title: 'Movies', component: MoviesPage, index:0},
      { icon:'desktop',title: 'Tv Shows', component: ShowPage, index:0},
      {icon:'videocam', title: 'Live Events', component: EventsPage, index:0},
      {icon:'heart-outline', title: 'Watch List', component: WatchlistPage, index:0},
      {icon:'briefcase', title: 'Order History', component: OrderhistoryPage, index:0},
      { icon:'call',title: 'Contact Us', component: ContactusPage, index:0},
      {icon:'log-out', title: 'Logout', component: HomePage , index:9},



    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pages=this.menu1;

      this.storage.get('email').then((val) => {
        this.pages=val? this.menu2 : this.menu1;
      });
    });

    this.events.subscribe('user:created', (data) => {
      // user and time are the same arguments passed in `events.publish(user, time)`
      console.log('Welcome', data);
      this.pages=this.menu2;
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    if(page.index==9){
      this.storage.set('email', "");
      this.pages=this.menu1;
      this.nav.setRoot(page.component);
    }
    else{
    this.nav.push(page.component);
    }
  }
}
