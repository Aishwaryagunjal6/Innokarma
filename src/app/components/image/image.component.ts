import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image',
  standalone: true,
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
  
  imports:[NgOptimizedImage]
})
export class ImageComponent {
  @Input() src: string = '';
  @Input() alt: string = 'Image';
  @Input() width: string = '';
  @Input() height: string = '';
  @Input() styleClass: string = 'img-fluid';
}
