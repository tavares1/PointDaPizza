import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './modules/cardapio/cardapio/cardapio.component';
import { PedidoComponent } from './modules/pedido/pedido/pedido.component';
import { HomeComponent } from './modules/home/home/home.component';
<<<<<<< HEAD
import { FooterComponent } from './modules/footer/footer/footer.component';
=======
import {LoginComponent} from './modules/login/login/login.component';
>>>>>>> 54d8227e53a01c56ffdfbef06608a77f2211f8ff

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'cardapio', component: CardapioComponent},
  {path: 'pedido', component: PedidoComponent},
  {path: 'login', component: LoginComponent},
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports: [RouterModule]
})

export class AppRoutingModule { }
