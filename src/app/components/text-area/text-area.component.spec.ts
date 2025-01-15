import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TextAreaComponent } from './text-area.component';

describe('TextAreaComponent', () => {
  let component: TextAreaComponent;
  let fixture: ComponentFixture<TextAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextAreaComponent], 
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set placeholder text', () => {
    component.placeholder = 'New placeholder';
    fixture.detectChanges();
    const textarea: HTMLTextAreaElement = fixture.nativeElement.querySelector('textarea');
    expect(textarea.placeholder).toBe('New placeholder');
  });

  it('should be disabled when disabled is true', () => {
    component.disabled = true;
    fixture.detectChanges();
    const textarea: HTMLTextAreaElement = fixture.nativeElement.querySelector('textarea');
    expect(textarea.disabled).toBe(true);
  });

  
});
