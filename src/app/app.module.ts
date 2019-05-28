import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { StreamingMedia } from '@ionic-native/streaming-media';



// import { FileTransfer } from '@ionic-native/file-transfer';


import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { MoviesPage } from '../pages/movies/movies';
import { ShowPage } from '../pages/show/show';
import { ContactusPage } from '../pages/contactus/contactus';
import { EventsPage } from '../pages/events/events';
import { IonicStorageModule } from '@ionic/storage';
import { ProfilePage } from '../pages/profile/profile';
import { UploadPage } from '../pages/upload/upload';
import { WatchlistPage } from '../pages/watchlist/watchlist';
import { OrderhistoryPage } from '../pages/orderhistory/orderhistory';
import { PackagePage } from '../pages/package/package';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    MoviesPage,
    ShowPage,
    ContactusPage,
    EventsPage,
    LoginPage,
    ProfilePage,
    UploadPage,
    WatchlistPage,
    OrderhistoryPage,
    PackagePage


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    MoviesPage,
    ShowPage,
    ContactusPage,
    EventsPage,
    LoginPage,
    ProfilePage,
    UploadPage,
    WatchlistPage,
    OrderhistoryPage,
    PackagePage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    InAppBrowser,

    StreamingMedia,
    //StreamingVideoOptions,
    // FileTransfer,
    File,


    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}
