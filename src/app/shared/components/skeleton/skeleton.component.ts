import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton',
  template: ``,
  styles: [`
    :host {
      display: block;
      animation: skeleton-loading 1s linear infinite alternate;
      border-radius: 0.15rem;
      width: var(--skeleton-rect-width);
      height: var(--skeleton-rect-height);
    }

    @keyframes skeleton-loading {
      0% {
        background-color: hsl(200, 20%, 80%);
      }
      100% {
        background-color: hsl(200, 20%, 95%);
      }
    }
  `]
})
export class SkeletonComponent implements OnInit {

  width!: string;
  height!: string;
  className!: string;

  constructor(private host: ElementRef<HTMLElement>) { }

  ngOnInit() {
    const host = this.host.nativeElement;

    if (this.className) {
      const classes = this.className.split(' ');
      classes.forEach(element => {
        host.classList.add(element);
      });
    }

    host.style.setProperty('--skeleton-rect-width', this.width ?? '100%');
    host.style.setProperty('--skeleton-rect-height', this.height ?? '20px');
  }

}
