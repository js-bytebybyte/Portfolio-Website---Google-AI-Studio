import { Component } from '@angular/core';
import { HERO_CONTENT } from '../constants';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  content = HERO_CONTENT;
}
