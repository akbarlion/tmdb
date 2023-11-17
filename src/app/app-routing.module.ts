import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from "./layout/app.layout.component";

@NgModule({
    imports: [
        RouterModule.forRoot([
            {
                path: '', redirectTo: 'auth/login', pathMatch: 'full'
            },
            {
                // path: '', component: AppLayoutComponent,
                path: '', component: AppLayoutComponent,
                children: [
                    { path: 'airday', loadChildren: () => import('./demo/components/airday/airday.module').then(m => m.AirdayModule) },
                    { path: 'ota', loadChildren: () => import('./demo/components/ota/ota.module').then(m => m.OtaModule) },
                    { path: 'popular', loadChildren: () => import('./demo/components/popular/popular.module').then(m => m.PopularModule) },
                    { path: 'movies', loadChildren: () => import('./demo/components/movies/movies.module').then(m => m.MoviesModule) }
                ]
            },
            // { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
            // { path: 'notfound', component: NotfoundComponent },
            // { path: '**', redirectTo: '/notfound' },
            { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
        ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
