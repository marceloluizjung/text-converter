import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng-lts/button';
import { CarouselModule } from 'primeng-lts/carousel';
import { InputTextareaModule } from 'primeng-lts/inputtextarea';
import { PanelModule } from 'primeng-lts/panel';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  imports: [
    InputTextareaModule,
    PanelModule,
    ButtonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    CarouselModule,
  ],
  exports: [
    InputTextareaModule,
    PanelModule,
    ButtonModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    CarouselModule,
  ],
})
export class SharedModule {}
