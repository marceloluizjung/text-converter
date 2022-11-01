import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng-lts/button';
import { InputTextareaModule } from 'primeng-lts/inputtextarea';
import { PanelModule } from 'primeng-lts/panel';

@NgModule({
  imports: [InputTextareaModule, PanelModule, ButtonModule, ReactiveFormsModule],
  exports: [InputTextareaModule, PanelModule, ButtonModule, ReactiveFormsModule],
})
export class SharedModule {}
