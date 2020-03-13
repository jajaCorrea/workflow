import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdtTextPageRoutingModule } from './edt-text-routing.module';

import { EdtTextPage } from './edt-text.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdtTextPageRoutingModule
  ],
  declarations: [EdtTextPage]
})
export class EdtTextPageModule {}
