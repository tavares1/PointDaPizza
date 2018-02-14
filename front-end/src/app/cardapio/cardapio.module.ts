import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardapioMenuComponent } from './cardapio-menu/cardapio-menu.component';
import { CardapioAdicionarComponent } from './cardapio-adicionar/cardapio-adicionar.component';
import { CardapioAlterarComponent } from './cardapio-alterar/cardapio-alterar.component';
import { CardapioExcluirComponent } from './cardapio-excluir/cardapio-excluir.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CardapioMenuComponent, CardapioAdicionarComponent, CardapioAlterarComponent, CardapioExcluirComponent]
})
export class CardapioModule { }
