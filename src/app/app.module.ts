import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// material design
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatCardModule, MatInputModule} from '@angular/material';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from "@angular/forms";

// dynamically loaded components
import {FormItemComponent} from "./form/form-item.component";
import {FormCheckboxComponent} from "./form/form-checkbox.component";
import {FormTemplateBaseComponent} from "./form/form-template-base.component";
import {FormTextInputComponent} from "./form/form-text-input.component";


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,

    // components
    FormComponent,
    FormItemComponent,
    FormTemplateBaseComponent,
    FormTextInputComponent,
    FormCheckboxComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ FormTextInputComponent, FormCheckboxComponent ]
})
export class AppModule { }
