import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NowplayingRoutingModule } from './nowplaying-routing.module';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ImageModule } from 'primeng/image';
import { ChipModule } from 'primeng/chip';
import { ScrollerModule } from 'primeng/scroller';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { ProgressBarModule } from 'primeng/progressbar';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NowplayingRoutingModule,
    ButtonModule,
    FormsModule,
    ToastModule,
    RippleModule,
    ImageModule,
    ChipModule,
    ScrollerModule,
    TableModule,
    ToolbarModule,
    ProgressBarModule,
    DialogModule
  ]
})
export class NowplayingModule { }
