import { Component } from '@angular/core';
import { CargaService } from './Compartida/Carga/carga.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';

  constructor(private _load: CargaService){
    this._load.toogle(true);
    
    }

    llamaDlg(): void {
      console.log('LLama...');
      this._load.toogle(true);
     }
     
     
  
}

