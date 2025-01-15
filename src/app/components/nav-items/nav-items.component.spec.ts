import { TestBed } from '@angular/core/testing';
import { NavItemComponent } from './nav-items.component';

describe('NavItemComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [NavItemComponent]
  }));

  it('should create the nav item component', () => {
    const fixture = TestBed.createComponent(NavItemComponent);
    const navItem = fixture.componentInstance;
    expect(navItem).toBeTruthy();
  });

  it('should set href correctly', () => {
    const fixture = TestBed.createComponent(NavItemComponent);
    const navItem = fixture.componentInstance;
    navItem.href = 'https://example.com';
    fixture.detectChanges();
    const compiled = fixture.nativeElement.querySelector('a');
    expect(compiled.getAttribute('href')).toBe('https://example.com');
  });
});
