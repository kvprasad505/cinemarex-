import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviedataPage } from './moviedata';

@NgModule({
  declarations: [
    MoviedataPage,
  ],
  imports: [
    IonicPageModule.forChild(MoviedataPage),
  ],
})
export class MoviedataPageModule {}
