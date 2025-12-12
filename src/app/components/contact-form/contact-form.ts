import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  interest: string;
  message: string;
  acceptTerms: boolean;
  acceptMarketing: boolean;
}

@Component({
  selector: 'app-contact-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss'
})
export class ContactFormComponent {
  isSubmitting = false;
  showSuccess = false;

  formData: ContactFormData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
    acceptTerms: false,
    acceptMarketing: false
  };

  onSubmit(): void {
    if (this.isSubmitting) return;
    
    this.isSubmitting = true;
    
    // Simulamos el envío del formulario
    setTimeout(() => {
      console.log('Form submitted:', this.formData);
      this.isSubmitting = false;
      this.showSuccess = true;
      this.resetForm();
    }, 2000);
  }

  resetForm(): void {
    this.formData = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      interest: '',
      message: '',
      acceptTerms: false,
      acceptMarketing: false
    };
  }

  hideSuccess(): void {
    this.showSuccess = false;
  }
}
