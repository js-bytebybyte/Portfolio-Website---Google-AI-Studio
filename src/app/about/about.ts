import { Component } from '@angular/core';
import { ABOUT_TEXT } from '../constants';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TabsModule, TabList } from 'primeng/tabs';

@Component({
  selector: 'app-about',
  imports: [CommonModule, ButtonModule, TabList, TabsModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  paragraphs = ABOUT_TEXT;
}
