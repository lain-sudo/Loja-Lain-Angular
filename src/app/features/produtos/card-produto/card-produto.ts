import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../../../model/produto';
import { QuantidadeControle } from '../../../shared/quantidade-controle/quantidade-controle';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.html',
  styleUrl: './card-produto.css',
  standalone: true,
  imports: [CommonModule, QuantidadeControle]
})
export class CardProduto {
  produto = input.required<Produto>();
  quantidade = signal<number>(1);

  get precoTotal(): number {
    return this.produto().preco * this.quantidade();
  }

  adicionarAoCarrinho() {
    alert(`${this.quantidade()}x ${this.produto().nome} adicionado ao carrinho! Total: R$ ${this.precoTotal.toFixed(2)}`);
  }
}