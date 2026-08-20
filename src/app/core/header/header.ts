import { Component, input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrl: './header.css',
  standalone: true,
  imports: []
})
export class Header {
  tituloLoja = input.required<string>();
}