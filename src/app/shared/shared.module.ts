import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng-lts/button';
import { InputTextareaModule } from 'primeng-lts/inputtextarea';
import { PanelModule } from 'primeng-lts/panel';

@NgModule({
  imports: [InputTextareaModule, PanelModule, ButtonModule],
  exports: [InputTextareaModule, PanelModule, ButtonModule],
})
export class SharedModule {}
