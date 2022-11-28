import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAboutUsComponent } from './page-aboutus/page-aboutus.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageUnicodeTextConverterComponent } from './page-unicode-text-converter/page-unicode-text-converter.component';

const ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: PageHomeComponent },
  {
    path: 'unicodetextconverter',
    component: PageUnicodeTextConverterComponent,
  },
  { path: 'aboutus', component: PageAboutUsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(ROUTES)],
  exports: [RouterModule],
})
export class PagesRouting {}
