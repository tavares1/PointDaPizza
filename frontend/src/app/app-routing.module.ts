import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { CardapioComponent } from './modules/cardapio/cardapio/cardapio.component';
import { PedidoComponent } from './modules/pedido/pedido/pedido.component';
import { HomeComponent } from './modules/home/home/home.component';
import { FooterComponent } from './modules/footer/footer/footer.component';

const routes : Routes = [
  {path: '', component: HomeComponent,pathMatch: 'full'},
  {path: 'cardapio', component: CardapioComponent},
  {path: 'pedido', component: PedidoComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  exports:[RouterModule]
})

export class AppRoutingModule { }
