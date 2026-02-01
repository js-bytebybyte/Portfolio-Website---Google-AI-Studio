import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAV_LINKS } from '../constants';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  links = NAV_LINKS;

  isScrolled = false;
  @HostListener('window:scroll', [])
    onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
}
