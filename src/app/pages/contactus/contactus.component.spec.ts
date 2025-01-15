import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactusComponent } from './contactus.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('ContactusComponent', () => {
  let component: ContactusComponent;
  let fixture: ComponentFixture<ContactusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, ContactusComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ContactusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should validate form controls and disable submit when invalid', () => {
    component.contactForm.controls['firstName'].setValue('');
    component.contactForm.controls['lastName'].setValue('');
    component.contactForm.controls['email'].setValue('invalidemail');
    fixture.detectChanges();
    expect(component.contactForm.invalid).toBeTrue();
    expect(fixture.nativeElement.querySelector('button').disabled).toBeTrue();
  });

  it('should enable submit button and display success message on valid submission', () => {
    component.contactForm.controls['firstName'].setValue('John');
    component.contactForm.controls['middleName'].setValue('M');
    component.contactForm.controls['lastName'].setValue('Doe');
    component.contactForm.controls['phoneNumber'].setValue('1234567890');
    component.contactForm.controls['position'].setValue('Developer');
    component.contactForm.controls['company'].setValue('Company');
    component.contactForm.controls['email'].setValue('test@example.com');
    component.contactForm.controls['message'].setValue('Hello');
    component.contactForm.controls['terms'].setValue(true);
    fixture.detectChanges();

    expect(component.contactForm.valid).toBeTrue();
    component.onSubmit();
    expect(component.formSubmitted).toBeTrue();
  });
});
