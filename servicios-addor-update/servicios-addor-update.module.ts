import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosADDorUpdatePageRoutingModule } from './servicios-addor-update-routing.module';

import { ServiciosADDorUpdatePage } from './servicios-addor-update.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    ServiciosADDorUpdatePageRoutingModule
  ],
  declarations: [ServiciosADDorUpdatePage]
})
export class ServiciosADDorUpdatePageModule {}
