import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabMenuModule } from 'primeng-lts/tabmenu';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FeaturesModule,
    AppRouting,
    TabMenuModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
