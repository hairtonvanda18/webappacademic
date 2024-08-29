import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkeletonModule } from '../../shared/components/skeleton/skeleton.module';
import { PaginationPipe } from '../../shared/pipes/pagination.pipe';
import { PaginationComponent } from '../../shared/components/pagination/pagination.component';
import { MessageComponent } from '../../shared/components/message/message.component';
import { InputSearchComponent } from '../../shared/components/input-search/input-search.component';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { DetailComponent } from './pages/detail/detail.component';
import { AccordionComponent } from '../../shared/components/accordion/accordion.component';
import { AccordionReleaseDataComponent } from './components/accordion-release-data/accordion-release-data.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { SelectComponent } from "../../shared/components/select/select.component";
import { ReleaseRoutingModule } from './release-routing.module';
import { ListComponent } from './pages/list/list.component';
import { SystemPipe } from '../../shared/pipes/system.pipe';
import { InputDataComponent } from "../../shared/components/input-data/input-data.component";
import { AccordionItensComponent } from './components/accordion-itens/accordion-itens.component';
import { RequestPipe } from '../../shared/pipes/request.pipe';

@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    AccordionReleaseDataComponent,
    AccordionItensComponent
  ],
  providers: [

  ],
  imports: [
    CommonModule,
    ReleaseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AccordionComponent,
    InputComponent,
    InputSearchComponent,
    SkeletonModule,
    MessageComponent,
    PaginationComponent,
    PaginationPipe,
    TruncatePipe,
    SelectComponent,
    SystemPipe,
    RequestPipe,
    InputDataComponent
  ]
})
export class ReleaseModule {}
