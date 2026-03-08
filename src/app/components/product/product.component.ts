import { Component } from '@angular/core';
import { products, ProductsData } from './products.model';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-product',
  imports: [MatChipsModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})

export class ProductComponent {
  products = products;
  chips = ProductsData.chipOptions;
  private whatsappPhone = '919876543210'; // Replace with your WhatsApp business number (include country code)

  inquire(product: any) {
    const message = this.generateWhatsAppMessage(product);
    this.redirectToWhatsApp(message);
  }

  private generateWhatsAppMessage(product: any): string {
    const greeting = this.getTimeBasedGreeting();
    const categoryEmoji = this.getCategoryEmoji(product.category);
    
    const message = `${greeting}! 👋\n\nI'm interested in the following product:\n\n${categoryEmoji} *${product.heading}*\n\nCategory: ${product.category}\n\nDescription: ${product.description}\n\nCould you please provide more details and pricing information?\n\nThank you!`;
    
    return message;
  }

  private getTimeBasedGreeting(): string {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good Morning';
    if (hour < 18) return 'Good Afternoon';
    return 'Good Evening';
  }

  private getCategoryEmoji(category: string): string {
    const emojiMap: { [key: string]: string } = {
      'Balcony Nets': '🏢',
      'Garden Nets': '🌿',
      'Sports Nets': '🏀',
      'Grills': '🔒',
      'Bamboo Curtains': '🎋'
    };
    return emojiMap[category] || '📦';
  }

  private redirectToWhatsApp(message: string): void {
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${this.whatsappPhone}?text=${encodedMessage}`;
    window.open(whatsappURL, '_blank');
  }

  navigateTo(products: any) {
    
  }


}
