import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-link',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './img-link.component.html',
  styleUrls: ['./img-link.component.css'],
})
export class ImageLinkComponent {
  @Input() href: string = '#'; // Link target URL
  @Input() src: string = ''; // Image source URL
  @Input() alt: string = 'Image'; // Alt text for accessibility
  @Input() target: string = '_blank'; // Open in new tab or same window
  @Input() width: string = ''; // Customizable width
  @Input() height: string = ''; // Customizable height
}
