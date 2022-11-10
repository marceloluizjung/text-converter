import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng-lts/button';
import { InputTextareaModule } from 'primeng-lts/inputtextarea';
import { PanelModule } from 'primeng-lts/panel';
import { AutoCompleteModule } from 'primeng/autocomplete';

@NgModule({
  imports: [
    InputTextareaModule,
    PanelModule,
    ButtonModule,
    ReactiveFormsModule,
    AutoCompleteModule
  ],
  exports: [
    InputTextareaModule,
    PanelModule,
    ButtonModule,
    ReactiveFormsModule,
    AutoCompleteModule
  ],
})
export class SharedModule {}
