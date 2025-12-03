import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Footer } from "./components/footer/footer";
import { Header } from './components/header/header';
@Component({
  selector: 'app-root',
  standalone: true,
imports: [
CommonModule,
    RouterModule,
    Header,
    Footer
],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = 'portfolio';
}