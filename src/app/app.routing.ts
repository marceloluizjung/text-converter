import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAboutUsComponent } from './features/pages/page-aboutus/page-aboutus.component';
import { PageHomeComponent } from './features/pages/page-home/page-home.component';
import { PageUnicodeTextConverterComponent } from './features/pages/page-unicode-text-converter/page-unicode-text-converter.component';

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
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRouting {}
