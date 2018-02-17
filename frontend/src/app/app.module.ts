import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule,HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './/app-routing.module';
import { CardapioModule } from './modules/cardapio/cardapio.module';
import { PedidoModule} from './modules/pedido/pedido.module';
import {HomeModule} from './modules/home/home.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

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
    HomeModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
