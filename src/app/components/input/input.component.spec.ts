import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InputComponent } from './input.component';
import { By } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent, CommonModule, ReactiveFormsModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display a placeholder for text input', () => {
    component.type = 'text';
    component.placeholder = 'Enter text';
    fixture.detectChanges();

    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    expect(inputEl.placeholder).toBe('Enter text');
  });

  it('should emit valueChange for text input', () => {
    component.type = 'text';
    const newValue = 'New text';
    spyOn(component.valueChange, 'emit');

    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    inputEl.value = newValue;
    inputEl.dispatchEvent(new Event('input'));

    expect(component.valueChange.emit).toHaveBeenCalledWith(newValue);
  });

  it('should emit valueChange for checkbox input', () => {
    component.type = 'checkbox';
    component.value = false;
    fixture.detectChanges();
    spyOn(component.valueChange, 'emit');

    const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
    inputEl.checked = true;
    inputEl.dispatchEvent(new Event('change'));

    expect(component.valueChange.emit).toHaveBeenCalledWith(true);
  });

  it('should render input with different types', () => {
    const inputTypes: Array<'text' | 'password' | 'checkbox' | 'email'> = ['text', 'checkbox', 'password', 'email'];
    inputTypes.forEach(type => {
      component.type = type;
      fixture.detectChanges();

      const inputEl = fixture.debugElement.query(By.css('input')).nativeElement;
      expect(inputEl.type).toBe(type);
    });
  });

  it('should display an error message for invalid email', () => {
    component.type = 'email';
    component.value = 'invalid-email';
    fixture.detectChanges();

    const errorMessage = fixture.debugElement.query(By.css('.error-message'));
    expect(errorMessage).toBeTruthy();
    expect(errorMessage.nativeElement.textContent).toContain('Invalid email format');
  });
});
