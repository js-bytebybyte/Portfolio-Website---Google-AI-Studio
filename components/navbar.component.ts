import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NAV_LINKS } from '../constants';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav [ngClass]="isScrolled ? 'bg-lumon-200/90 backdrop-blur-md border-white/40 shadow-sm' : 'bg-transparent border-transparent'"
         class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b h-20">
      <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 h-full flex items-center justify-between">
        <a href="#" class="flex items-center gap-2 group">
          <div class="w-8 h-8 bg-lumon-800 text-white flex items-center justify-center rounded-md font-display font-bold text-xl group-hover:bg-lumon-600 transition-colors">
            JS
          </div>
          <span class="font-display font-bold text-lg tracking-tight text-lumon-900 uppercase">
            Steenput<span class="text-lumon-500">.mdr</span>
          </span>
        </a>

        <div class="hidden md:flex items-center gap-8">
          <a *ngFor="let link of links" [href]="link.href" 
             class="text-xs font-mono font-bold tracking-widest uppercase text-lumon-700 hover:text-lumon-900 hover:underline decoration-2 underline-offset-4 transition-all">
            {{link.label}}
          </a>
          <a href="#contact" class="text-xs font-mono font-bold uppercase tracking-widest px-6 py-2 bg-lumon-800 text-white rounded hover:bg-lumon-700 transition-colors shadow-lg shadow-lumon-800/20">
            Initiate Contact
          </a>
        </div>
      </div>
    </nav>
  `
})
export class NavbarComponent {
  links = NAV_LINKS;
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }
}