import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-item',
  templateUrl: './popover-item.component.html'
})
export class PopoverItemComponent {
  isSelected: boolean = false;

  onSelect = () => {
    this.isSelected = !this.isSelected;
  };

  onHide = () => {
    this.isSelected = false;
  };

}
