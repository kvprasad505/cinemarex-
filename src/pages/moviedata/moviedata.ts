import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media';


/**
 * Generated class for the MoviedataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moviedata',
  templateUrl: 'moviedata.html',
})
export class MoviedataPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private iab: InAppBrowser, private streamingMedia: StreamingMedia ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviedataPage');
  }
  buy(){
    const browser = this.iab.create('https://ionicframework.com/','_self',{location:'no',zoom:'no',toolbar: 'no'});
  }
  watch(){
    // Playing a video.

    this.streamingMedia.playVideo('https://www.radiantmediaplayer.com/media/bbb-360p.mp4');
}
}

