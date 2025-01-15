import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { DropdownComponent } from './components/drop-down/drop-down.component';
import { HyperlinkComponent } from './components/hyperlink/hyperlink.component';
import { ImageComponent } from './components/image/image.component';
import { ImageLinkComponent } from './components/img-link/img-link.component';
import { InputComponent } from './components/input/input.component';
import { NavItemComponent } from './components/nav-items/nav-items.component';
import { TextComponent } from './components/text/text.component';
import { TextAreaComponent } from './components/text-area/text-area.component';
import { NavbarComponent } from './molecules/navbar/navbar.component';
import { TestimonialCardComponent } from './molecules/testimonial-card/testimonial-card.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive, ButtonComponent, DropdownComponent, HyperlinkComponent, ImageComponent,ImageLinkComponent,InputComponent,NavItemComponent,TextComponent, TextAreaComponent, NavbarComponent, TestimonialCardComponent, SearchBoxComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyFirstAssignment';

  onClick() {
    console.log('Button clicked!');
  }

  dropdownItems = [
    { label: 'Option 1', value: 1 },
    { label: 'Option 2', value: 2 },
    { label: 'Option 3', value: 3 },
    { label: 'Option 4', value: 4 }
  ];

  handleSelection(selectedItem: any) {
    console.log('Selected item:', selectedItem);
  }

  textAreaValue: string = ''; 

  handleTextChange(newValue: string) {
    this.textAreaValue = newValue;
    console.log('Text area value changed:', newValue);
  }
}
