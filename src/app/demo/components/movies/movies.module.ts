import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { NowplayingComponent } from './nowplaying/nowplaying.component';
import { PopularmovieComponent } from './popularmovie/popularmovie.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
