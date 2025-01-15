import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from '../../components/input/input.component';
import { TextAreaComponent } from '../../components/text-area/text-area.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent, TextAreaComponent, ButtonComponent],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css'],
})
export class ContactusComponent {
  contactForm: FormGroup;
  positions = ['Manager', 'Developer', 'Designer', 'Other'];
  formSubmitted = false;
  submissionFailed = false;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      middleName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', [
        Validators.required,
        Validators.pattern('^[7-9][0-9]{9}$'),
      ]),
      position: new FormControl('', Validators.required),
      company: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl(''),
      message: new FormControl('', Validators.required),
      terms: new FormControl(false, Validators.requiredTrue),
    });
  }

  getFormControl(controlName: string): FormControl {
    return this.contactForm.get(controlName) as FormControl;
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.formSubmitted = true;
      this.submissionFailed = false;
      console.log('Form submitted successfully', this.contactForm.value);
    } else {
      this.submissionFailed = true;
      console.log('Form submission failed');
    }
  }
}
