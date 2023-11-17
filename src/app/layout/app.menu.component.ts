import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'TV',
                items: [
                    { label: 'Airing Today', icon: 'pi pi-fw pi-chart-line', routerLink: ['airday'] },
                    { label: 'On The Air', icon: 'pi pi-fw pi-video', routerLink: ['ota'] },
                    { label: 'Popular', icon: 'pi pi-fw pi-star-fill', routerLink: ['popular'] }
                ]
            },
            {
                label: 'Movies',
                items: [
                    { label: 'Now Playing', icon: 'pi pi-fw pi-upload', routerLink: ['movies/nowplaying'] },
                    { label: 'Popular', icon: 'pi pi-fw pi-star-fill', routerLink: ['movies/popularmovie'] }
                ]
            }
        ];
    }
}
