import { Component, OnInit, OnDestroy, Input, ViewChild, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { CAROUSEL_DATA } from '../../data/carousel.data';
import { CarouselItem } from '../../models/carousel.model';
import { ImageComponent } from '../../components/image/image.component';

@Component({
  selector: 'app-carousel2',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule, ImageComponent],
  templateUrl: './carousel2.component.html',
  styleUrls: ['./carousel2.component.css'],
})
export class Carousel2Component  {
  @Input() interval: number = 3000;

  svgImage : string = "assets/images/image1.svg"

  carouselItems: CarouselItem[] = CAROUSEL_DATA;
  currentIndex = 0;

  @ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

  onSlide(event: NgbSlideEvent) {
    const currentSlideId = parseInt(event.current.replace('ngb-slide-', ''), 10);
    this.currentIndex = currentSlideId;
  }

}
