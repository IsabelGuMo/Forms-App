import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterFormComponent } from './features/register-form/register-form.component';
import { FormComponent } from './features/register-form/components/form/form.component';
import { InterfaceComponent } from './features/register-form/models/interface/interface.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    FormComponent,
    InterfaceComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
