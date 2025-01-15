import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import {
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
  NG_VALIDATORS,
  ValidationErrors,
  Validator,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  standalone: true,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
  imports: [CommonModule, ReactiveFormsModule],
})
export class InputComponent implements ControlValueAccessor, Validator {
  @Input() placeholder: string = 'Enter value';
  @Input() type: 'text' | 'password' | 'email' | 'checkbox' = 'text';
  @Input() labelText?: string;
  @Input() formControl!: FormControl;

  @Output() valueChange = new EventEmitter<any>();

  value: any = '';
  onChange = (value: any) => {};
  onTouched = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  onInputChange(event: Event): void {
    const target = event.target as HTMLInputElement;
    const newValue = this.type === 'checkbox' ? target.checked : target.value;
    this.value = newValue;
    this.onChange(newValue);
    this.valueChange.emit(newValue);
  }

  get isEmailValid(): boolean {
    if (this.type === 'email' && this.value) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailPattern.test(this.value);
    }
    return true;
  }

  validate(): ValidationErrors | null {
    if (this.type === 'email' && this.value && !this.isEmailValid) {
      return { email: { valid: false } };
    }
    return null;
  }
}
