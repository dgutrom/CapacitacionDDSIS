import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CompartidaModule } from './Compartida/Compartida.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CompartidaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
