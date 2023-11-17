import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'nowplaying', data: { breadcrumb: 'Now Playing' }, loadChildren: () => import('./nowplaying/nowplaying.module').then(m => m.NowplayingModule) },
    { path: 'popularmovie', data: { breadcrumb: 'Popular Movie' }, loadChildren: () => import('./popularmovie/popularmovie.module').then(m => m.PopularmovieModule) }
  ])],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
