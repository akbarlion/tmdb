import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtaComponent } from './ota.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', component: OtaComponent }
  ])],
  exports: [RouterModule]
})
export class OtaRoutingModule { }
