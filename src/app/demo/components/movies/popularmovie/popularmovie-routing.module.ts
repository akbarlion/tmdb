import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularmovieComponent } from './popularmovie.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: PopularmovieComponent }
  ])],
  exports: [RouterModule]
})
export class PopularmovieRoutingModule { }
