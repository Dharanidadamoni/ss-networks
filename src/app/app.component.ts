import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./Header/header/header.component";
import { ProductComponent } from "./Product/product/product.component";
import { AboutUsComponent } from "./About_Us/about-us/about-us.component";
import { ContactUsComponent } from "./Contact_Us/contact-us/contact-us.component";
import { MatIconModule } from '@angular/material/icon';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, 
    ProductComponent, 
    AboutUsComponent, 
    ContactUsComponent, 
    RouterOutlet,
    MatIconModule
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ss-nets';
}
