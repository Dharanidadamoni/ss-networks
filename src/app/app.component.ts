import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Header/header/header.component";
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from "./Header/footer/footer.component";
import { faHome, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,
    RouterOutlet,
    MatIconModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {

  constructor() {
    // Add multiple icons to the library in a single call
    // library.addIcons(faHome, faBars, faTimes);
  }
  title = 'ss-nets';
}
