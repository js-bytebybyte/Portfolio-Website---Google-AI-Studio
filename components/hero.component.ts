import { Component } from '@angular/core';
import { HERO_CONTENT } from '../constants';

@Component({
  selector: 'app-hero',
  standalone: true,
  template: `
    <section id="home" class="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24 max-w-7xl mx-auto py-32 relative">
      <div class="max-w-3xl mb-8 animate-fade-in">
        <div class="flex justify-between text-xs font-mono font-bold text-lumon-800 mb-1 uppercase tracking-widest">
          <span>Employee Profile Optimization</span>
          <span>98% Complete</span>
        </div>
        <div class="w-full h-6 border-2 border-white/50 rounded-sm p-0.5 relative bg-white/5">
          <div class="h-full bg-gradient-to-r from-lumon-600 to-lumon-500 w-[98%] shadow-[0_0_10px_rgba(70,109,143,0.5)]"></div>
          <div class="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.2)_50%,transparent_100%)] opacity-30 w-full animate-pulse"></div>
        </div>
      </div>

      <div class="max-w-4xl">
        <div class="inline-flex items-center gap-2 px-3 py-1 bg-lumon-800/10 border border-lumon-800/20 rounded mb-6 backdrop-blur-sm">
          <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span class="text-xs font-mono font-bold text-lumon-800 uppercase tracking-wider">System: Online</span>
        </div>
        
        <h1 class="font-display text-5xl md:text-7xl font-bold text-lumon-900 leading-[1] mb-8 tracking-tight drop-shadow-sm">
          {{content.headline}}
        </h1>
        
        <p class="text-xl md:text-2xl text-lumon-700 font-medium leading-relaxed max-w-2xl border-l-4 border-lumon-500 pl-6 mb-12">
          {{content.subtext}}
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="#work" class="px-8 py-4 bg-lumon-800 text-white rounded font-mono text-sm font-bold uppercase tracking-wider hover:bg-lumon-900 transition-all text-center">
            Access Data
          </a>
          <a href="#about" class="px-8 py-4 bg-transparent border-2 border-lumon-800 text-lumon-900 rounded font-mono text-sm font-bold uppercase tracking-wider hover:bg-lumon-800 hover:text-white transition-all text-center">
            Read Bio
          </a>
        </div>
      </div>
      
      <div class="absolute right-0 top-1/4 opacity-10 font-mono text-9xl font-bold text-white pointer-events-none select-none hidden lg:block leading-none text-right">
        06<br/>19<br/>42
      </div>
    </section>
  `
})
export class HeroComponent {
  content = HERO_CONTENT;
}