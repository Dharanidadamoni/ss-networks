import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-footer',
  imports: [MatIconModule,],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  openSocial(platform: string, event: Event) {
    event.stopPropagation();
    // Optionally track analytics or open in new tab
    let url = '';
    switch (platform) {
      case 'facebook':
        url = 'https://facebook.com';
        break;
      case 'instagram':
        url = 'https://instagram.com';
        break;
      case 'whatsapp':
        url = 'https://wa.me/1234567890';
        break;
    }
    window.open(url, '_blank');
  }

}
