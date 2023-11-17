import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NowplayingComponent } from './nowplaying.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: NowplayingComponent }
  ])],
  exports: [RouterModule]
})
export class NowplayingRoutingModule { }
