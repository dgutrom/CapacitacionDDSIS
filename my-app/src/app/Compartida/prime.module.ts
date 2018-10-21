import { NgModule } from '@angular/core';

import { TableModule } from 'primeng/table';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';

@NgModule({
    exports: [ TableModule, ProgressSpinnerModule, DialogModule ]
})
export class PrimeNgModule { }
