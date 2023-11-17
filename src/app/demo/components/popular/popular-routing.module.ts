import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PopularComponent } from './popular.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: PopularComponent }
  ])],
  exports: [RouterModule]
})
export class PopularRoutingModule { }
