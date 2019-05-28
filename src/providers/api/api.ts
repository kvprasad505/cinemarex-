import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  public data:any;
  public URL="http://159.65.152.77/api/";

  constructor(public http: HttpClient) {
    console.log('Hello ServiceProvider Provider');
  }

  postData(url,data){
    var header = { "headers": {"Content-Type": "application/json"} };
    return new Promise(resolve =>{
      this.http.post(url,data,header).subscribe(data =>  {
        this.data=data;
        console.dir(data);
        resolve(this.data);
      },error=> {
        console.log("sorry...");
      });
    });
  }

  getdata(url){
    var header = { "headers": {"Content-Type": "application/json"} };
    //console.log("url: " + url);
    return new Promise(resolve => {
      this.http.get(url,header).subscribe(data => {
        this.data=data;
        resolve(this.data);
      }, err => {
        console.dir(err);
        console.log("sorry");
      });
    });
  }
  getmovies(){
    var url = this.URL+"v1/ghost/get/movies";
    var header = { "headers": {"Content-Type": "application/json"} };

    //return this.http.get(url, header);
    return this.getdata(url);

  }
}
