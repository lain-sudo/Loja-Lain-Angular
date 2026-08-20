import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProduto } from '../card-produto/card-produto';
import { Produto } from '../../../model/produto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
  standalone: true,
  imports: [CommonModule, CardProduto]
})
export class ProductList {
  produtos: Produto[] = [
    {
      id: 1,
      nome: 'Navi-Lain',
      preco: 1299.00,
      descricao: 'Computador portátil vermelho. Acesse The Wired em qualquer lugar.',
      imageUrl: 'images/navi-lain.png',
      promo: false
    },
    {
      id: 2,
      nome: 'Navi-Lain Pro',
      preco: 1899.00,
      descricao: 'Versão premium com processador aprimorado. Memórias mais profundas.',
      imageUrl: 'images/navi-lain.png',
      promo: true
    },
    {
      id: 3,
      nome: 'Navi-Lain Compact',
      preco: 899.00,
      descricao: 'Versão compacta e portátil. Perfeita para exploração.',
      imageUrl: 'images/navi-lain.png',
      promo: false
    }
  ];
}