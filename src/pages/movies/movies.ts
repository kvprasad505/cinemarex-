import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


/**npm install @ionic-native/network
 * Generated class for the MoviesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movies',
  templateUrl: 'movies.html',
})
export class MoviesPage {
  public data:any;
  public poster:any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public service: ApiProvider) {
   this.getdata();

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviesPage');
  }

  getdata(){
    this.service.getmovies().then((data :any) => {
      console.log("response",data);
      this.data = data.data.movies;

      for(var i=0;i<data.data.movies.length;i++){
        this.poster.push("http://159.65.152.77/storage/posters/600_" + data.data.movies[i].poster);

      }
      //this.poster="http://159.65.152.77/storage/posters/600_" + data.data.movies[0].poster;
      console.log("after data fetch");
      console.log("testing data",this.data);
      //console.log("testing poster",this.poster);
    // }, err => {
    //   console.dir(err);
    })
  }

}


