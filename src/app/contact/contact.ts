import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SOCIALS } from '../constants';
import { LucideAngularModule, File, House, Menu, UserCheck } from 'lucide-angular';

@NgModule({
  imports: [
    LucideAngularModule.pick({File, House, Menu, UserCheck})
  ]
})
export class AppModule { }

@Component({
  selector: 'app-contact',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {

  socials = SOCIALS;

}
