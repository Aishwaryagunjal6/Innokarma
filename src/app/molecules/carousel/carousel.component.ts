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

  carouselData: CarouselItem[] = CAROUSEL_DATA;
  private intervalId: any;
  private currentIndex = 0;
  private isReversing = false;
  private isMobile = false;

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkMobile();
    this.scrollToIndex();
  }

  ngOnInit(): void {
    this.checkMobile();
    if (this.autoScroll === true) this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.stopAutoSlide();
  }

  private checkMobile(): void {
    this.isMobile = window.innerWidth <= 768;
  }

  private getItemWidth(): number {
    if (!this.carouselInner?.nativeElement) return 0;
    return this.isMobile ? 
      this.carouselInner.nativeElement.offsetWidth : 
      this.carouselInner.nativeElement.offsetWidth / 3;
  }

  startAutoSlide(): void {
    if (this.autoScroll !== true) return;
    this.stopAutoSlide();
    this.intervalId = setInterval(() => {
      this.updateIndex();
      this.scrollToIndex();
    }, this.autoScrollInterval);
  }

  stopAutoSlide(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  updateIndex(): void {
    switch (this.autoScrollBehavior) {
      case 'default':
        this.currentIndex = (this.currentIndex + 1) % this.carouselData.length;
        break;
      case 'infinite':
        this.infiniteScroll();
        break;
      case 'alternate':
        this.alternateScroll();
        break;
    }
  }

  infiniteScroll(): void {
    if (++this.currentIndex >= this.carouselData.length) {
      const firstItem = this.carouselData.shift();
      if (firstItem) this.carouselData.push(firstItem);
      this.currentIndex = this.carouselData.length - 1;
    }
  }

  alternateScroll(): void {
    this.currentIndex += this.isReversing ? -1 : 1;
    if (this.currentIndex >= this.carouselData.length - 1 || this.currentIndex <= 0) {
      this.isReversing = !this.isReversing;
    }
  }

  scrollToIndex(): void {
    if (!this.carouselInner?.nativeElement) return;
    
    const itemWidth = this.getItemWidth();
    const gap = this.isMobile ? 0 : 20; 
    const offset = this.currentIndex * (itemWidth + gap);
    
    this.carouselInner.nativeElement.scrollTo({
      left: offset,
      behavior: 'smooth'
    });
  }

  prevSlide(): void {
    this.stopAutoSlide();
    if (--this.currentIndex < 0) {
      const lastItem = this.carouselData.pop();
      if (lastItem) {
        this.carouselData.unshift(lastItem);
        this.currentIndex = 0;
      } else {
        this.currentIndex = 0;
      }
    }
    this.scrollToIndex();
    if (this.autoScroll === true) {
      this.startAutoSlide();
    }
  }

  nextSlide(): void {
    this.stopAutoSlide();
    if (++this.currentIndex >= this.carouselData.length) {
      const firstItem = this.carouselData.shift();
      if (firstItem) {
        this.carouselData.push(firstItem);
        this.currentIndex = this.carouselData.length - 1;
      } else {
        this.currentIndex = 0;
      }
    }
    this.scrollToIndex();
    if (this.autoScroll === true) {
      this.startAutoSlide();
    }
  }
}