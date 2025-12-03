import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [CommonModule],
   standalone: true,
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss']
})
export class Hero {

}
