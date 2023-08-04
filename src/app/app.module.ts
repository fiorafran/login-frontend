import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { ColorPickerComponent } from './components/color-picker/color-picker.component';
import { TitleSubtitleComponent } from './components/title-subtitle/title-subtitle.component';
import { SelectComponent } from './components/select/select.component';
import { PreviewComponent } from './components/preview/preview.component';
import { BubbleComponent } from './components/bubble/bubble.component';
import { NavigationButtonsComponent } from './components/navigation-buttons/navigation-buttons.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    HomeComponent,
    ErrorMessageComponent,
    ColorPickerComponent,
    TitleSubtitleComponent,
    SelectComponent,
    PreviewComponent,
    BubbleComponent,
    NavigationButtonsComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
