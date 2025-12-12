import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header';
import { HeroComponent } from './components/hero/hero';
import { FeaturesComponent } from './components/features/features';
import { GalleryComponent } from './components/gallery/gallery';
import { FinancingComponent } from './components/financing/financing';
import { ContactFormComponent } from './components/contact-form/contact-form';
import { FooterComponent } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    HeroComponent,
    FeaturesComponent,
    GalleryComponent,
    FinancingComponent,
    ContactFormComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('Nova X-2025 Landing');
}
