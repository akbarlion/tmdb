import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AirdayRoutingModule } from './airday-routing.module';
import { ButtonModule } from 'primeng/button';
import { ProgressBar, ProgressBarModule } from 'primeng/progressbar';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';
import { ImageModule } from 'primeng/image';
import { ChipModule } from 'primeng/chip';
import { ScrollerModule } from 'primeng/scroller';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AirdayRoutingModule,
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
export class AirdayModule { }
