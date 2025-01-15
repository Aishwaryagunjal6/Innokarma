import { TestBed } from '@angular/core/testing';
import { ImageLinkComponent } from './img-link.component';

describe('ImageLinkComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ImageLinkComponent]
  }));

  it('should create the image link component', () => {
    const fixture = TestBed.createComponent(ImageLinkComponent);
    const imgLink = fixture.componentInstance;
    expect(imgLink).toBeTruthy();
  });

  it('should have correct href and img src', () => {
    const fixture = TestBed.createComponent(ImageLinkComponent);
    const imgLink = fixture.componentInstance;
    imgLink.href = 'https://example.com';
    imgLink.src = 'https://example.com/image.jpg';
    fixture.detectChanges();
    const compiled = fixture.nativeElement.querySelector('a');
    expect(compiled.getAttribute('href')).toBe('https://example.com');
    expect(compiled.querySelector('img').getAttribute('src')).toBe('https://example.com/image.jpg');
  });
});
