import { Component} from '@angular/core';

@Component({
  selector: 'app-accordion-itens',
  templateUrl: './accordion-itens.component.html'
})
export class AccordionItensComponent {


  currentPage: number = 1;

  changePage = (page: number) => {
    this.currentPage = page;
  };
}
