import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavigationDropdownListComponent } from './navigation-dropdown-list.component';
import { By } from '@angular/platform-browser'; // For accessing DOM elements

describe('NavigationDropdownListComponent', () => {
  let component: NavigationDropdownListComponent;
  let fixture: ComponentFixture<NavigationDropdownListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavigationDropdownListComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(NavigationDropdownListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should close the dropdown when close() is called', () => {
    //to open the dropdown manually
    component.isOpen = true;
    fixture.detectChanges();

    //checking if the list is closed or not
    component.close();
    fixture.detectChanges();

    expect(component.isOpen).toBeFalse();
  });

});
