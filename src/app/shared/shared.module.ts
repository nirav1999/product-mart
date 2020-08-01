import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PmMaterialModule } from './material-module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedRoutingModule,
    RouterModule,
    PmMaterialModule
  ],
  exports:[
    PmMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
