import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../../model/produto';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.css',
  standalone: true,
  imports: [CommonModule]
})
export class CardProduto {
  produto = input.required<Produto>();

  adicionarAoCarrinho() {
    alert(`${this.produto().nome} adicionado ao carrinho!`);
  }
}