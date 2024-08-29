import { Directive, Input, OnChanges, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';
import { SkeletonComponent } from './skeleton.component';

@Directive({
  selector: '[skeleton]'
})
export class SkeletonDirective implements OnChanges {
  @Input('skeleton') isLoading: boolean | null = false;
  @Input('skeletonRepeat') size = 1;
  @Input('skeletonWidth') width: string = '20%';
  @Input('skeletonHeight') height: string = '0.8rem';
  @Input('skeletonClassName') className: string = '';

  constructor(private tpl: TemplateRef<any>, private vcr: ViewContainerRef) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['isLoading']) {
      this.vcr.clear();

      if (changes['isLoading'].currentValue) {
        Array.from({ length: this.size }).forEach(() => {
          const ref = this.vcr.createComponent(SkeletonComponent);

          Object.assign(ref.instance, {
            width: this.width,
            height: this.height,
            className: this.className
          });
        });
      } else {
        this.vcr.createEmbeddedView(this.tpl);
      }
    }
  }
}
