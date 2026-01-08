import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Shofer } from './shofer';

@Component({
  selector: 'app-vozac',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vozac.component.html',
  styleUrl: './vozac.component.css'
})

export class VozacComponent 
{
  @Input()
  motordzija!: Shofer;
   @Input()
  indeks:Number=0;

  klik() {
    console.log("Button Clicked");
  }
}
