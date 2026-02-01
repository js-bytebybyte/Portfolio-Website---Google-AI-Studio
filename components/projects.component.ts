import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../constants';
import { createIcons, ArrowUpRight, Github, Database } from 'lucide';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="work" class="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto relative">
      <div class="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 border-b-2 border-white/40 pb-6">
        <div>
          <h2 class="font-display text-4xl md:text-5xl font-bold text-lumon-900 mb-2 uppercase tracking-tighter">
            PROJECTS
          </h2>
          <p class="font-mono text-sm text-lumon-800 font-bold uppercase tracking-widest opacity-80">
            Current Refinement: Proximus DQT dashboard
          </p>
        </div>
        <div class="px-4 py-2 border border-white/60 rounded bg-green-500 backdrop-blur-sm">
          <span class="font-mono text-xs font-bold text-lumon-900 uppercase">Status: Clear</span>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div *ngFor="let project of projects; let i = index" 
             class="group flex flex-col bg-lumon-400/20 backdrop-blur-sm border-2 border-white/60 rounded-sm overflow-hidden shadow-[0_10px_30px_-15px_rgba(0,0,0,0.2)] hover:border-white transition-all duration-300">
          
          <div class="border-b-2 border-white/60 p-2 flex justify-between items-center bg-white/20">
             <span class="font-mono text-lg font-bold text-lumon-900">0{{i + 1}}</span>
             <i data-lucide="database" class="w-4 h-4 text-lumon-800 opacity-60"></i>
          </div>

          <div class="relative flex-1 p-6 flex flex-col min-h-[420px]">
            <div class="absolute inset-0 z-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
              <svg class="w-full h-full" viewBox="0 0 200 200">
                <defs>
                  <radialGradient [id]="'grad-' + i" cx="50%" cy="50%" r="50%">
                    <stop id="animatedStop" offset="0%" />
                    <stop offset="100%" stop-color="transparent" />
                  </radialGradient>
                </defs>
                <circle id="bounce" cx="100" cy="80" r="40" [attr.fill]="'url(#grad-' + i + ')'" />
                <circle id="bounce2" cx="100" cy="80" r="25" [attr.fill]="'url(#grad-' + i + ')'" />
                <g id="particles" fill="white" fill-opacity="0.4">
                  <circle cx="80" cy="120" r="2" />
                  <circle cx="120" cy="110" r="1" />
                  <circle cx="100" cy="130" r="1.5" />
                </g>
              </svg>
            </div>

            <div class="relative z-10 flex flex-col h-full">
              <div class="mb-4">
                <h3 class="font-display text-2xl font-bold text-lumon-900 leading-none group-hover:text-white transition-colors">
                  {{project.title}}
                </h3>
                <p class="font-mono text-[10px] uppercase font-bold text-lumon-800 mt-2 opacity-60">
                  {{project.category}}
                </p>
              </div>

              <div class="flex-1 space-y-4">
                <div class="p-3 bg-white/10 border border-white/20 rounded-sm">
                  <h4 class="font-mono text-[9px] font-bold text-lumon-900 uppercase tracking-widest mb-1 opacity-60">Refinement Log</h4>
                  <p class="text-sm font-medium text-lumon-800 line-clamp-4">{{project.description}}</p>
                </div>
                
                <div class="flex flex-wrap gap-1">
                  <span *ngFor="let tech of project.stack" 
                        class="px-1.5 py-0.5 border border-white/40 font-mono text-[9px] font-bold text-lumon-900 bg-white/5 uppercase">
                    {{tech}}
                  </span>
                </div>
              </div>

              <div class="mt-8 flex gap-4 border-t border-white/40 pt-4">
                <a *ngIf="project.link" [href]="project.link" class="flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-lumon-900 hover:text-white transition-colors">
                  [ LAUNCH ] <i data-lucide="arrow-up-right" class="w-3 h-3"></i>
                </a>
                <a *ngIf="project.github" [href]="project.github" class="flex items-center gap-1 text-[10px] font-mono font-bold uppercase text-lumon-800/60 hover:text-lumon-900 transition-colors">
                  [ SOURCE ] <i data-lucide="github" class="w-3 h-3"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="border-t-2 border-white/60 bg-white/20 p-3">
             <div class="flex justify-between items-center mb-1">
               <span class="font-mono text-[10px] font-bold text-lumon-900 uppercase">Refinement Level</span>
               <span class="font-mono text-[10px] font-bold text-lumon-900">{{progressValues[i]}}%</span>
             </div>
             <div class="h-5 border border-white/60 p-0.5 relative overflow-hidden">
                <div class="h-full bg-lumon-800/80 transition-all duration-1000" 
                     [style.width.%]="progressValues[i]"></div>
                <div class="absolute inset-0 monitor-scanline opacity-50"></div>
             </div>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center italic font-sans text-xs text-lumon-800/60 font-medium">
        More projects underway... Stay tuned!
      </div>
    </section>
  `
})
export class ProjectsComponent implements AfterViewInit {
  projects = PROJECTS;
  progressValues = PROJECTS.map((_, i) => 70 + (i * 7));

  ngAfterViewInit() {
    createIcons({
      icons: { ArrowUpRight, Github, Database }
    });
  }
}