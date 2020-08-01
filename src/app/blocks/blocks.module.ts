import { SharedModule } from './../shared/shared.module';
import { AppComponent } from './root/app.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlocksRoutingModule } from './blocks-routing.module';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [HeaderComponent, AppComponent],
  imports: [
    CommonModule,
    BlocksRoutingModule,
    SharedModule
  ],
  exports: [HeaderComponent, AppComponent]
})
export class BlocksModule { }
