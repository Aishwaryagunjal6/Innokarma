import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() label: string = ''; // Button label
  @Input() disabled: boolean = false; // Disabled state
  @Input() type: 'button' | 'submit' | 'reset' = 'button'; // Button type
  @Input() styleClass: string = ''; // CSS class for styling
  @Input() color: string = ''; // Custom button color
  @Input() width: string = 'auto'; // Button width
  @Input() height: string = 'auto'; // Button height

  @Output() onClick = new EventEmitter<void>(); // Event emitter for clicks

  handleClick() {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }
}