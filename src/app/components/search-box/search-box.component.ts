import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import for ngModel
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonComponent], // Import FormsModule
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css'],
})
export class SearchBoxComponent {
  @Input() placeholder: string = 'Search...';
  @Input() debounceTime: number = 300;

  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  searchValue: string = ''; // Two-way binding value

  onSearch() {
    this.search.emit(this.searchValue);
    console.log('Search triggered:', this.searchValue);
  }

  clearSearch() {
    this.searchValue = ''; // Clear the search input
    this.search.emit(this.searchValue);
    console.log('Search cleared:', this.searchValue);
  }
}
