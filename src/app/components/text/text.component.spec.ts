import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextComponent } from './text.component';
import { By } from '@angular/platform-browser';

describe('TextComponent', () => {
  let component: TextComponent;
  let fixture: ComponentFixture<TextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextComponent]  // Add TextComponent to imports array
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render a paragraph by default', () => {
    const p = fixture.debugElement.query(By.css('p'));
    expect(p.nativeElement.textContent).toBe('Sample text');
  });

  it('should render an h1 when tag is set to h1', () => {
    component.tag = 'h1';
    component.content = 'Heading 1';
    fixture.detectChanges();
    
    const h1 = fixture.debugElement.query(By.css('h1'));
    expect(h1.nativeElement.textContent).toBe('Heading 1');
  });

  it('should render a span when tag is set to span', () => {
    component.tag = 'span';
    component.content = 'Inline text';
    fixture.detectChanges();

    const span = fixture.debugElement.query(By.css('span'));
    expect(span.nativeElement.textContent).toBe('Inline text');
  });
});
