import { Directive, ElementRef, HostListener, Input  } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() highlightColor: string;

  constructor(private el: ElementRef) {
  }

  // tslint:disable-next-line: typedef
  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  // tslint:disable-next-line: typedef
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  // tslint:disable-next-line: typedef
  highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
