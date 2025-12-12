import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  imports: [],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss'
})
export class GalleryComponent {
  isModalOpen = false;
  modalImage = '';
  modalAlt = '';

  openModal(image: string, alt: string): void {
    this.modalImage = image;
    this.modalAlt = alt;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.modalImage = '';
    this.modalAlt = '';
    document.body.style.overflow = 'auto';
  }
}
