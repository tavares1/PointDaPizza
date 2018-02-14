import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './/app-routing.module';
import { CardapioModule } from './cardapio/cardapio.module'
import { PedidoModule} from './pedido/pedido.module'


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CardapioModule,
    PedidoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
