import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IncrementarDecrementarComponent } from './components/incrementar-decrementar/incrementar-decrementar.component';
import { MultiplicarDividirComponent } from './components/multiplicar-dividir/multiplicar-dividir.component';
import { ResetearComponent } from './components/resetear/resetear.component';

@NgModule({
  declarations: [
    AppComponent,
    IncrementarDecrementarComponent,
    MultiplicarDividirComponent,
    ResetearComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
