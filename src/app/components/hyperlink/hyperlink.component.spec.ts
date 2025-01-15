import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HyperlinkComponent } from './hyperlink.component';
import { By } from '@angular/platform-browser';

describe('HyperlinkComponent', () => {
  let component: HyperlinkComponent;
  let fixture: ComponentFixture<HyperlinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HyperlinkComponent] // Since it’s standalone
    }).compileComponents();

    fixture = TestBed.createComponent(HyperlinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have default values', () => {
    const linkElement = fixture.debugElement.query(By.css('a'));
    expect(component.href).toBe('#');
    expect(component.target).toBe('_self');
    expect(component.styleClass).toBe('link-primary');
    expect(linkElement.nativeElement.getAttribute('href')).toBe('#');
    expect(linkElement.nativeElement.getAttribute('target')).toBe('_self');
  });

  it('should apply custom href, target, and rel', () => {
    component.href = 'https://www.example.com';
    component.target = '_blank';
    component.rel = 'noopener noreferrer';
    fixture.detectChanges();

    const linkElement = fixture.debugElement.query(By.css('a'));
    expect(linkElement.nativeElement.getAttribute('href')).toBe('https://www.example.com');
    expect(linkElement.nativeElement.getAttribute('target')).toBe('_blank');
    expect(linkElement.nativeElement.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('should apply custom style class', () => {
    component.styleClass = 'link-secondary';
    fixture.detectChanges();

    const linkElement = fixture.debugElement.query(By.css('a'));
    expect(linkElement.nativeElement.classList.contains('link-secondary')).toBeTruthy();
  });

});
