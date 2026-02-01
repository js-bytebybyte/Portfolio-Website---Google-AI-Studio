import { Component } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { HeroComponent } from './components/hero.component';
import { ProjectsComponent } from './components/projects.component';
import { SkillsComponent } from './components/skills.component';
import { AboutComponent } from './components/about.component';
import { ContactComponent } from './components/contact.component';
import { FooterComponent } from './components/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    HeroComponent,
    ProjectsComponent,
    SkillsComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen relative bg-lumon-300 text-lumon-900 font-sans selection:bg-lumon-900 selection:text-white">
      <!-- Background Texture Overlay -->
      <div class="fixed inset-0 pointer-events-none z-0 bg-data-grid opacity-40"></div>
      
      <!-- Vignette -->
      <div class="fixed inset-0 pointer-events-none z-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(21,30,41,0.2)_100%)]"></div>

      <div class="relative z-10">
        <app-navbar></app-navbar>
        <main>
          <app-hero></app-hero>
          <app-projects></app-projects>
          <app-skills></app-skills>
          <app-about></app-about>
          <app-contact></app-contact>
        </main>
        <app-footer></app-footer>
      </div>
    </div>
  `
})
export class AppComponent {}