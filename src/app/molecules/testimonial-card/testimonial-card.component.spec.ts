import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestimonialCardComponent } from './testimonial-card.component';
import { By } from '@angular/platform-browser';

describe('TestimonialCardComponent', () => {
  let component: TestimonialCardComponent;
  let fixture: ComponentFixture<TestimonialCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestimonialCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(TestimonialCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display the author name and testimonial text', () => {
    component.authorName = 'John Doe';
    component.testimonialText = 'This is a great product!';
    fixture.detectChanges();

    const authorName = fixture.debugElement.query(By.css('h4')).nativeElement;
    const testimonialText = fixture.debugElement.query(By.css('p')).nativeElement;

    expect(authorName.textContent).toContain('John Doe');
    expect(testimonialText.textContent).toContain('This is a great product!');
  });

  it('should not display profile image if showAuthorImage is false', () => {
    component.profileImage = 'https://example.com/john.jpg';   
    component.showAuthorImage = false;
    fixture.detectChanges();

    const image = fixture.debugElement.query(By.css('img'));
    expect(image).toBeNull();  // Image should not present in the DOM
  });

  it('should display star rating if showStarRating is true', () => {
    component.starRating = 4;
    component.showStarRating = true;
    fixture.detectChanges();

    const stars = fixture.debugElement.queryAll(By.css('.star.filled'));
    expect(stars.length).toBe(4);  //expect that 4 stars should get printed
  });

  it('should not display stars if showStarRating is false', () => {
    component.showStarRating = false;
    fixture.detectChanges();

    const stars = fixture.debugElement.query(By.css('.star-rating'));
    expect(stars).toBeNull();  // Star rating division should not exist here
  });
});
