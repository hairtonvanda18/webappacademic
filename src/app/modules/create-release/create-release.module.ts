import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkeletonModule } from '../../shared/components/skeleton/skeleton.module';
import { ModalLayoutComponent } from '../../shared/components/modal/modal-layout/modal-layout.component';
import { MessageComponent } from '../../shared/components/message/message.component';
import { TruncatePipe } from '../../shared/pipes/truncate.pipe';
import { InputComponent } from '../../shared/components/input/input.component';
import { TextareaComponent } from '../../shared/components/textarea/textarea.component';
import { SelectComponent } from "../../shared/components/select/select.component";
import { CreateReleaseRoutingModule } from './create-release-routing.module';
import { FormComponent } from './pages/form/form.component';
import { InputDataComponent } from '../../shared/components/input-data/input-data.component';
import { AddItemComponent } from './components/add-item/add-item.component';
import { PopoverItemComponent } from './components/popover-item/popover-item.component';
import { RequestPipe } from '../../shared/pipes/request.pipe';
import { AddJsonComponent } from './components/add-json/add-json.component';

@NgModule({
  declarations: [
    FormComponent,
    AddItemComponent,
    AddJsonComponent,
    PopoverItemComponent
  ],
  providers: [
  ],
  imports: [
    CommonModule,
    CreateReleaseRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InputComponent,
    TextareaComponent,
    SkeletonModule,
    ModalLayoutComponent,
    MessageComponent,
    TruncatePipe,
    RequestPipe,
    SelectComponent,
    InputDataComponent
  ]
})
export class CreateReleaseModule {}
