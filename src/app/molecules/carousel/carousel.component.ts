import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Input, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CAROUSEL_DATA } from '../../data/carousel.data';
import { CarouselItem } from '../../models/carousel.model';
import { CarouselCardComponent } from '../carousel-card/carousel-card.component';
import { ButtonComponent } from '../../components/button/button.component';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule, CarouselCardComponent, ButtonComponent],
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit, OnDestroy {
  @ViewChild('carouselInner') carouselInner!: ElementRef<HTMLDivElement>;
  @Input() autoScroll: boolean = false;
  @Input() autoScrollBehavior: 'default' | 'infinite' | 'alternate' = 'default';
  @Input() autoScrollInterval: number = 2500;

  carouselData: CarouselItem[] = CAROUSEL_DATA.map(item => ({ ...item }));
  private intervalId: number | null = null;
  private currentIndex = 0;
  private isReversing = false;
  private isMobile = false;

  @HostListener('window:resize')
  onResize(): void {
    this.checkMobile();
    this.scrollToIndex();
  }

  ngOnInit(): void {
    this.checkMobile();
    if (this.autoScroll) this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  private checkMobile(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  startAutoSlide(): void {
    if (!this.autoScroll) return;
    this.stopAutoSlide();
    this.intervalId = window.setInterval(() => {
      this.updateIndex();
      this.scrollToIndex();
    }, this.autoScrollInterval);
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  private updateIndex(): void {
    switch (this.autoScrollBehavior) {
      case 'default':
        this.currentIndex = (this.currentIndex + 1) % this.carouselData.length;
        break;
      case 'infinite':
        this.nextSlide();
        break;
      case 'alternate':
        this.alternateScroll();
        break;
    }
  }

  private alternateScroll(): void {
    this.currentIndex += this.isReversing ? -1 : 1;
    if (this.currentIndex >= this.carouselData.length - 2 || this.currentIndex <= 0) {
      this.isReversing = !this.isReversing;
    }
  }

  private scrollToIndex(): void {
    if (!this.carouselInner?.nativeElement) return;
    const scrollWidth = this.carouselInner.nativeElement.offsetWidth / (this.isMobile ? 1 : 3);
    const gap = 20;
    const offset = this.currentIndex * (scrollWidth + (this.isMobile ? 0 : gap));
    
    this.carouselInner.nativeElement.scrollTo({
      left: offset,
      behavior: 'smooth'
    });
  }

  nextSlide(): void {
    this.stopAutoSlide();
    const isAtEnd = this.currentIndex >= this.carouselData.length - (this.isMobile ? 1 : 3);
  
    if (isAtEnd) {
      const firstItem = this.carouselData[0];
      this.carouselData = [...this.carouselData.slice(1), firstItem];
      
      requestAnimationFrame(() => {
        if (this.carouselInner?.nativeElement) {
            this.scrollToIndex();
        }
      });
    } else {
      this.currentIndex++;
      this.scrollToIndex();
    }
    
    if (this.autoScroll) this.startAutoSlide();
  }
  
  prevSlide(): void {
    this.stopAutoSlide();
    
    if (this.currentIndex === 0) {
      const lastItem = this.carouselData[this.carouselData.length - 1];
      this.carouselData = [lastItem, ...this.carouselData.slice(0, -1)];
      
      requestAnimationFrame(() => {
        if (this.carouselInner?.nativeElement) {
            this.scrollToIndex();
        }
      });
    } else {
      this.currentIndex--;
      this.scrollToIndex();
    }
    
    if (this.autoScroll) this.startAutoSlide();
  }

}




