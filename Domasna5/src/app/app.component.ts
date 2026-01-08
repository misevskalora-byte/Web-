import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VozacComponent } from './vozac/vozac.component';
import { DRIVERS } from './db-data';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,VozacComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'my-app';

  prvVozac = DRIVERS[0];
  vtorVozac = DRIVERS[1];
  tretVozac = DRIVERS[2];
}

