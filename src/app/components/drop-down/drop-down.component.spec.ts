import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DropdownComponent } from './drop-down.component';
import { CommonModule } from '@angular/common';
import { By } from '@angular/platform-browser';

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonModule, DropdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;
    component.items = [
      { label: 'Item 1', value: 1 },
      { label: 'Item 2', value: 2 },
      { label: 'Item 3', value: 3 },
    ];
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the placeholder', () => {
    const buttonElement = fixture.debugElement.query(By.css('.dropdown-toggle'));
    expect(buttonElement.nativeElement.textContent).toContain(component.placeholder);
  });

  it('should open the dropdown when the button is clicked', () => {
    const buttonElement = fixture.debugElement.query(By.css('.dropdown-toggle'));
    buttonElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    const dropdownMenu = fixture.debugElement.query(By.css('.dropdown-menu'));
    expect(dropdownMenu).toBeTruthy();
  });

  it('should emit the selected item when an item is clicked', () => {
    spyOn(component.onSelect, 'emit');
    component.toggleDropdown(); // Open dropdown
    fixture.detectChanges();

    const itemElement = fixture.debugElement.query(By.css('.dropdown-menu li'));
    itemElement.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.onSelect.emit).toHaveBeenCalledWith(component.items[0]);
  });

  it('should be disabled when the disabled input is true', () => {
    component.disabled = true;
    fixture.detectChanges();

    const buttonElement = fixture.debugElement.query(By.css('.dropdown-toggle'));
    expect(buttonElement.nativeElement.disabled).toBeTrue();
  });
});
