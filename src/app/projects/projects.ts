import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PROJECTS } from '../constants';
// import { createIcons, ArrowUpRight, Github, Database } from 'lucide';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  projects = PROJECTS;

  progressValues = PROJECTS.map((_, i) => 70 + (i * 7));

  // ngAfterViewInit() {
  //   createIcons({
  //     icons: { ArrowUpRight, Github, Database }
  //   });
  // }
}
