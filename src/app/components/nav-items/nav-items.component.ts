import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nav-item',
  standalone: true,
  templateUrl: './nav-items.component.html',
  styleUrls: ['./nav-items.component.css'],
  imports: [CommonModule]
})
export class NavItemComponent {
  @Input() label: string = 'Nav Item';
  @Input() href: string = '#';
  @Input() styleClass: string = ''; // For additional styling
  @Input() isLink: boolean = true; // Flag to determine if the item is a link or button

  handleClick() {
    console.log(`${this.label} button clicked!`); // Example action on button click
  }
}
