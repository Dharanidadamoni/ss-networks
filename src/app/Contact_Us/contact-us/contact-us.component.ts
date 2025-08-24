import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators  } from '@angular/forms';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';

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
  message: string = "";

  constructor() {
  }

  onSubmit(): void {

    this.sending = true;
    this.success = false;
    this.error = false;

    const templateParams = {
      name: this.name,
      email: this.email,
      message: this.message
    };

    console.log(templateParams);
    alert('Success');
    debugger

    // emailjs.send(
    //   'service_szdpztl',       // e.g. service_ID
    //   'template_ndojoam',      // e.g. template_ID
    //   templateParams,
    //   '_-kxSWQAbLGUUzRUI'        // e.g. user_ID
    // ).then((response: EmailJSResponseStatus) => {
    //   console.log('SUCCESS!', response.status, response.text);
    //   this.sending = false;
    //   this.success = true;
    //   this.contactForm.reset();
    // }, (err) => {
    //   console.error('FAILED...', err);
    //   this.sending = false;
    //   this.error = true;
    // });
    this.openWhatsApp()
  }

  openWhatsApp(): void {
    const phoneNumber = '919542527057'; // Replace with your WhatsApp number (with country code)
    const message = encodeURIComponent('Hello! I’d like to know more about your services.');
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, '_blank');
  }

}