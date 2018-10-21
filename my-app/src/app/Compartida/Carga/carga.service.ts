import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable()
export class CargaService {

    toogle$: Observable<any>;
    private _oberver: Observer<any>;

    constructor() {
        this.toogle$ = new Observable(obs => this._oberver = obs).pipe(share());
    }

    toogle(toogle: boolean) {
        if (this._oberver) {
            this._oberver.next(toogle);
        }
    }

}
