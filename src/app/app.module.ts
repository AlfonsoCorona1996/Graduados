import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { InicioComponent } from './inicio/inicio.component';
import { PortadaComponent } from './portada/portada.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    PortadaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [
PortadaComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
