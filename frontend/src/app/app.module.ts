import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { AppRoutingModule } from './/app-routing.module';
import { CardapioModule } from './modules/cardapio/cardapio.module';
import { PedidoModule} from './modules/pedido/pedido.module';
import {HomeModule} from './modules/home/home.module';
<<<<<<< HEAD
import {FooterModule} from './modules/footer/footer.module';
=======
import {LoginModule} from './modules/login/login.module';
>>>>>>> 54d8227e53a01c56ffdfbef06608a77f2211f8ff
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CardapioModule,
    PedidoModule,
    HomeModule,
    FooterModule,
    NgbModule.forRoot(),
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
