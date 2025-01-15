import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageComponent } from '../../components/image/image.component';
import { TextComponent } from '../../components/text/text.component';
import { CarouselItem } from '../../models/carousel.model';

@Component({
  selector: 'app-carousel-card',
  standalone: true,
  imports: [CommonModule,  TextComponent],
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.css']
})
export class CarouselCardComponent {
  @Input() item!: CarouselItem;

  navigateToLink(): void {
    if (this.item.link) {
      window.open(this.item.link, '_blank'); 
    }
  }
}