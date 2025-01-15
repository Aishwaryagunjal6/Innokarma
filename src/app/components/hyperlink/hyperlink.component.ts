import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hyperlink',
  standalone: true,
  templateUrl: './hyperlink.component.html',
  styleUrls: ['./hyperlink.component.css']
})
export class HyperlinkComponent {
  @Input() href: string = '#';
  @Input() target: string = '_self'; // Set default target
  @Input() styleClass: string = 'link-primary'; // Default style class
  @Input() rel: string = ''; // For security reasons, especially with target="_blank"

  constructor() {}
}
