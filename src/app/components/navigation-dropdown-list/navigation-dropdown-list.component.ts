import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-navigation-dropdown-list',
  standalone: true,
  templateUrl: './navigation-dropdown-list.component.html',
  styleUrls: ['./navigation-dropdown-list.component.css'],
  imports: [CommonModule] 
})
export class NavigationDropdownListComponent {
  @Input() items: any[] = [];
  @Input() isOpen: boolean = false;
  @Input() placement: string = 'bottom-start';
  @Input() trigger: string = 'click';
  @Input() disabled: boolean = false;
  @Input() customClass: string = '';

  @Output() itemClick: EventEmitter<any> = new EventEmitter();

  toggleOpen() {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
    }
  }

  close() {
    this.isOpen = false;
  }

  onItemClick(item: any) {
    this.itemClick.emit(item);
  }
}
