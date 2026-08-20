import { Component } from '@angular/core';
import { Header } from './core/header/header';
import { Footer } from './core/footer/footer';
import { ProductList } from './features/produtos/product-list/product-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  standalone: true,
  imports: [Header, Footer, ProductList]
})
export class App {
  
}