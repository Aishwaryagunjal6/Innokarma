import { Component } from '@angular/core';
import { NavigationDropdownListComponent } from '../../components/navigation-dropdown-list/navigation-dropdown-list.component';
import { SearchBoxComponent } from '../../components/search-box/search-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImageLinkComponent } from '../../components/img-link/img-link.component';
import { DropdownComponent } from '../../components/drop-down/drop-down.component';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    FormsModule,
    NavigationDropdownListComponent,
    SearchBoxComponent,
    ImageLinkComponent,
    DropdownComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    ReactiveFormsModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  dropdownItems = [
    { label: 'Home', url: '/home' },
    { label: 'About', url: '/about', items: [{ label: 'Team', url: '/team' }, { label: 'Department', url: '/dept' }] },
    { label: 'Contact', url: '/contact' },
  ];

  onItemClick(item: any) {
    console.log('Item clicked:', item);
  }

  onSearch(query: string) {
    console.log('Search query:', query);
  }

  isDropdownOpen: boolean = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }
}
