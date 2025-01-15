import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropdownComponent {
  @Input() items: { label: string, value: any }[] = [];
  @Input() placeholder: string = 'Select...';
  @Input() disabled: boolean = false;
  @Input() styleClass: string = ''; // Add style class input
  @Output() onSelect = new EventEmitter<any>();

  isOpen = false;
  selectedValue: string | null = null; // To track selected value

  toggleDropdown() {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  selectItem(item: any) {
    this.selectedValue = item.label; // Update selected value
    this.onSelect.emit(item.value); // Emit the item's value
    this.isOpen = false;
  }

  closeDropdown() {
    this.isOpen = false; // Close dropdown when clicking outside
  }
}
