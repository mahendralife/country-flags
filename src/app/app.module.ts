import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MaterialComponenentsModule } from './material.components.module';
import { AppRoutingModule , routingComponents } from './app.routing';
import { FilterPipe } from './filter';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchbarComponent,
    routingComponents,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule, HttpClientModule,
    MaterialComponenentsModule,
    AppRoutingModule, FormsModule

  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
