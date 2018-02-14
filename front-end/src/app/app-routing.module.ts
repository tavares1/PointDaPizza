import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import {CardapioComponent} from '../app/cardapio/cardapio/cardapio.component'
import { PedidoComponent } from './pedido/pedido/pedido.component';


const routes : Routes = [
  {path: '', redirectTo: '/cardapio',pathMatch: 'full'},
  {path: 'cardapio', component: CardapioComponent},
  {path: 'pedido', component: PedidoComponent}
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports:[RouterModule]
})

export class AppRoutingModule { }
