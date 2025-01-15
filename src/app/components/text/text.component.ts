import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-text',
  standalone: true,
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None 
})
export class TextComponent {
  @Input() content: string = 'Sample text';
  @Input() tag: string = 'p';  
}
