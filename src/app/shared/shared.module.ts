import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng-lts/button';
import { CarouselModule } from 'primeng-lts/carousel';
import { InputTextareaModule } from 'primeng-lts/inputtextarea';
import { PanelModule } from 'primeng-lts/panel';
import { TabMenuModule } from 'primeng-lts/tabmenu';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  imports: [
    InputTextareaModule,
    PanelModule,
    ButtonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    CarouselModule,
    TabMenuModule
  ],
  exports: [
    InputTextareaModule,
    PanelModule,
    ButtonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    CarouselModule,
    TabMenuModule
  ],
})
export class SharedModule {}
