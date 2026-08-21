import { Component, model } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quantidade-controle',
  templateUrl: './quantidade-controle.html',
  styleUrl: './quantidade-controle.css',
  standalone: true,
  imports: [CommonModule]
})
export class QuantidadeControle {
  // model faz two-way binding automático
  quantidade = model<number>(1);

  decrementar() {
    if (this.quantidade() > 1) {
      this.quantidade.set(this.quantidade() - 1);
    }
  }

  incrementar() {
    this.quantidade.update(q => q + 1);
  }

  alterarQuantidade(novaQuantidade: number) {
    if (novaQuantidade >= 1) {
      this.quantidade.set(novaQuantidade);
    }
  }
}