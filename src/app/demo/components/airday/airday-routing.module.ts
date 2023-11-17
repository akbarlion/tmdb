import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AirdayComponent } from './airday.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    // { path: '', loadChildren: () => import('./airday.module').then(m => m.AirdayModule) }
    {
      path: '', component: AirdayComponent
    }
  ])],
  exports: [RouterModule]
})
export class AirdayRoutingModule { }
