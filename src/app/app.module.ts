import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExponentialStrengthPipe } from './app.exponentialStrengthPipe';
import { HighlightDirective } from './app.highlightDirective';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ExponentialStrengthPipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DatePipe, ExponentialStrengthPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
