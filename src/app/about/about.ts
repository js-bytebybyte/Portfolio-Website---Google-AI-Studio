import { Component } from '@angular/core';
import { ABOUT_TEXT } from '../constants';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  paragraphs = ABOUT_TEXT;
}
