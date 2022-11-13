import { PageAboutUsComponent } from './page-aboutus/page-aboutus.component';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageUnicodeTextConverterComponent } from './page-unicode-text-converter/page-unicode-text-converter.component';
import { PagesRouting } from './pages.routing';

@NgModule({
  imports: [SharedModule, PagesRouting],
  declarations: [PageUnicodeTextConverterComponent, PageHomeComponent, PageAboutUsComponent],
  exports: [],
})
export class PagesModule {}
