import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from './prime.module';
import { CargaComponent } from './Carga/carga.component';
import { CargaService } from './Carga/carga.service';

@NgModule({
    imports: [
      CommonModule,
      PrimeNgModule
    ],
    declarations: [
      CargaComponent
    ],
    exports: [
      CargaComponent
    ],
    providers: [
      CargaService
    ],
    entryComponents: [],
    schemas: [
      CUSTOM_ELEMENTS_SCHEMA
    ]
  })
export class CompartidaModule {}
