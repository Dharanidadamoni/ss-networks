import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  templateUrl:"./header.component.html",
  imports: [RouterLink, CommonModule, MatIconModule],
  styleUrl:'./header.scss'
  
})
export class HeaderComponent {

  constructor(private _router: Router){}
  isMenuOpen = false;

  navItems = [
    { link: '/home', icon: 'home', name: 'Home' },
    { link: '/products', icon: 'store', name: 'Products' },
    { link: '/about', icon: 'info', name: 'About Us' },
    { link: '/contact', icon: 'phone', name: 'Contact Us' }
  ];

  navigate(link: string) {
    this._router.navigateByUrl(`/${link}`);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

}

