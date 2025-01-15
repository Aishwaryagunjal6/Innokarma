import { Component } from '@angular/core';
import { CarouselComponent } from '../../molecules/carousel/carousel.component';
import { Carousel2Component } from '../../molecules/carousel2/carousel2.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselComponent, Carousel2Component],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  carouselSlides: { type: 'image' | 'content'; content: string; alt?: string }[] = [
    { type: 'image', content: 'https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg', alt: 'Slide 1' },
    { type: 'image', content: 'https://wallpaperset.com/w/full/c/9/0/522708.jpg' },
    { type: 'image', content: 'https://jooinn.com/images/lonely-tree-reflection-3.jpg', alt: 'Slide 3' },
  ];
}
