import { NgModule } from '@angular/core';
import { SkeletonDirective } from './skeleton.directive';
import { SkeletonComponent } from './skeleton.component';


@NgModule({
  declarations: [
    SkeletonDirective,
    SkeletonComponent
  ],
  exports: [
    SkeletonDirective
  ]
})
export class SkeletonModule { }
