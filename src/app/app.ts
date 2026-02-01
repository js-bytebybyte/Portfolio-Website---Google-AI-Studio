import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from './hero/hero';
import { About } from './about/about';
import { Skills } from "./skills/skills";
import { Navbar } from "./navbar/navbar";
import { Projects } from './projects/projects';
import { Contact }  from './contact/contact';
import { Footer } from "./footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, About, Navbar, Hero, Skills, Projects, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio-feb');
}
