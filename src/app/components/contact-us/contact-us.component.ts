import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss'
})
export class ContactUsComponent {
  sending: boolean = false;
  success: boolean = false;
  error: boolean = false;
  name: string = "";
  email: string = "";
  mobile: string = "";
  message: string = "";

  constructor() {}

  onSubmit(): void {
    // Validate inputs
    if (!this.name || !this.mobile || !this.message) {
      this.error = true;
      setTimeout(() => this.error = false, 5000);
      return;
    }

    this.sending = true;
    this.success = false;
    this.error = false;

    const templateParams = {
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      message: this.message
    };

    // Open WhatsApp with form data
    this.openWhatsAppWithMessage(templateParams);
  }

  openWhatsApp(): void {
    const phoneNumber = '+918121317131';
    const message = encodeURIComponent('Hello SS Nets & Grills! 👋\n\nI would like to know more about your premium safety net solutions.\n\nThank you!');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }

  private openWhatsAppWithMessage(params: any): void {
    const phoneNumber = '+918121317131';
    const whatsappMessage = `Hello SS Nets & Grills! 👋\n\n*Customer Details:*\n\nName: ${params.name}\nMobile: ${params.mobile}\n\n*Message:*\n${params.message}\n\nThank you!`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open WhatsApp and show success message
    window.open(url, '_blank');
    this.sending = false;
    this.success = true;
    
    // Reset form
    this.resetForm();
    
    // Hide success message after 5 seconds
    setTimeout(() => this.success = false, 5000);
  }

  private resetForm(): void {
    this.name = "";
    this.email = "";
    this.mobile = "";
    this.message = "";
  }
}