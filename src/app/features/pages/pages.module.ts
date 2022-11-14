import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageAboutUsComponent } from './page-aboutus/page-aboutus.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageUnicodeTextConverterComponent } from './page-unicode-text-converter/page-unicode-text-converter.component';

@NgModule({
  imports: [SharedModule],
  declarations: [
    PageUnicodeTextConverterComponent,
    PageHomeComponent,
    PageAboutUsComponent,
  ],
  exports: [
    PageUnicodeTextConverterComponent,
    PageHomeComponent,
    PageAboutUsComponent,
  ],
})
export class PagesModule {}
