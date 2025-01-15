import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';  

@Component({
  selector: 'app-testimonial-card',
  standalone: true,
  templateUrl: './testimonial-card.component.html',
  styleUrls: ['./testimonial-card.component.css'],
  imports: [CommonModule]  
})
export class TestimonialCardComponent {
  @Input() authorName: string = '';
  @Input() authorTitle?: string;
  @Input() authorCompany?: string;
  @Input() testimonialText: string = '';
  @Input() profileImage?: string;
  @Input() starRating?: number;
  @Input() showAuthorImage: boolean = true;
  @Input() showStarRating: boolean = true;
}
