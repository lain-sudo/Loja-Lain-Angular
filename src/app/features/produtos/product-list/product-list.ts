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
      descricao: 'Computador portátil vermelho. Acesse The Wired em qualquer lugar. Conecte-se à realidade virtual.',
      imageUrl: 'images/navi-lain.png',
      promo: false
    }
  ];
}