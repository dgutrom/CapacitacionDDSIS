import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
// import { Subscription } from 'rxjs/Subscription';
import { CargaService } from './carga.service';
import { Subscription } from 'rxjs';
// import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-carga',
    templateUrl: 'carga.component.html'
})
export class CargaComponent implements OnInit, OnDestroy {

    public toogle = false;
    private sub: Subscription;

    constructor(
        private _loadService: CargaService
    ) { }

    ngOnInit() {
        this.sub = this._loadService.toogle$.subscribe(toogle => this.toogleComponent(toogle));
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    toogleComponent(toogle: boolean) {
        this.toogle = toogle;
    }

}
