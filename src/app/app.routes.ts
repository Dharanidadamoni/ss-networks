import { Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { HeaderComponent } from './Header/header/header.component';
import { AboutUsComponent } from './About_Us/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponentComponent } from './components/home-component/home-component.component';

export const routes: Routes = [
    { path: '', component: HomeComponentComponent }, // Route for the home page
    {path: 'home', component: HomeComponentComponent},
    { path: 'products', component: ProductComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'contact', component: ContactUsComponent },
];
