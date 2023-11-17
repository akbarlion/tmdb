import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AppLayoutModule } from './layout/app.layout.module';
import { ProductService } from './demo/service/product.service';
import { CountryService } from './demo/service/country.service';
import { CustomerService } from './demo/service/customer.service';
import { EventService } from './demo/service/event.service';
import { IconService } from './demo/service/icon.service';
import { NodeService } from './demo/service/node.service';
import { PhotoService } from './demo/service/photo.service';
import { AirdayComponent } from './demo/components/airday/airday.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { OtaComponent } from './demo/components/ota/ota.component';
import { MessageModule } from 'primeng/message';
import { MessageService } from 'primeng/api';
import { PopularComponent } from './demo/components/popular/popular.component';
import { NowplayingComponent } from './demo/components/movies/nowplaying/nowplaying.component';
import { PopularmovieComponent } from './demo/components/movies/popularmovie/popularmovie.component';

@NgModule({
    declarations: [
        AppComponent,
        AirdayComponent,
        OtaComponent,
        PopularComponent,
        NowplayingComponent,
        PopularmovieComponent
    ],
    imports: [
        AppRoutingModule,
        AppLayoutModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        DialogModule,
        ButtonModule,
        ProgressBarModule,
        MessageModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService, MessageService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
