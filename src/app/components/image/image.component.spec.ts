import { TestBed } from '@angular/core/testing';
import { ImageComponent } from './image.component';

describe('ImageComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ImageComponent]
  }));

  it('should create the image component', () => {
    const fixture = TestBed.createComponent(ImageComponent);
    const image = fixture.componentInstance;
    expect(image).toBeTruthy();
  });

  it('should set src and alt attributes correctly', () => {
    const fixture = TestBed.createComponent(ImageComponent);
    const image = fixture.componentInstance;
    image.src = 'https://example.com/image.jpg';
    image.alt = 'Example Image';
    fixture.detectChanges();
    const compiled = fixture.nativeElement.querySelector('img');
    expect(compiled.getAttribute('src')).toBe('https://example.com/image.jpg');
    expect(compiled.getAttribute('alt')).toBe('Example Image');
  });
});
