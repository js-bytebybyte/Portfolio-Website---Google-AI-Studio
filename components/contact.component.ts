import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SOCIALS } from '../constants';
import { createIcons, Mail, Copy, Send, Github, Linkedin } from 'lucide';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="py-20 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto text-center">
      <div class="inline-block px-4 py-1 rounded-full border border-lumon-800/30 bg-lumon-800/5 text-lumon-800 font-mono text-xs font-bold uppercase tracking-widest mb-6">Secure Terminal: BRU-TERMINAL-01</div>
      <h2 class="font-display text-4xl md:text-5xl font-bold text-lumon-900 mb-12">Initiate Transmission</h2>
      
      <div class="bg-white p-2 rounded-lg shadow-xl border border-lumon-200 max-w-lg mx-auto overflow-hidden">
        <div class="bg-lumon-50 rounded border border-lumon-100 p-8">
          <p class="text-lumon-600 mb-8 font-medium italic font-mono text-sm">"Please enjoy all transmission channels equally."</p>
          <div class="space-y-4">
            <a href="mailto:jolande.steenput@gmail.com" class="flex items-center justify-center gap-3 w-full py-4 bg-lumon-800 text-white rounded font-mono text-sm font-bold uppercase tracking-widest hover:bg-lumon-900 transition-all shadow-lg">
              <i data-lucide="mail" class="w-4 h-4"></i> Send Packet
            </a>
            
            <div class="flex gap-4">
                <a *ngFor="let social of socials" [href]="social.url" target="_blank" class="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-lumon-800 text-lumon-900 rounded font-mono text-xs font-bold uppercase tracking-widest hover:bg-lumon-800 hover:text-white transition-all">
                    {{social.platform}}
                </a>
            </div>
          </div>
        </div>
      </div>
      
      <div class="mt-16 opacity-30 font-mono text-[10px] text-lumon-800 tracking-widest uppercase">
        Brussels, Belgium // UTC+1
      </div>
    </section>
  `
})
export class ContactComponent implements AfterViewInit {
    socials = SOCIALS;

    ngAfterViewInit() {
        createIcons({
            icons: { Mail, Send, Github, Linkedin }
        });
    }
}