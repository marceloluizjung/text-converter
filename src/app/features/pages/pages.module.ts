import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageUnicodeTextConverterComponent } from './page-unicode-text-converter/page-unicode-text-converter.component';

@NgModule({
  imports: [SharedModule],
  declarations: [PageUnicodeTextConverterComponent],
  exports: [PageUnicodeTextConverterComponent],
})
export class PagesModule {}
