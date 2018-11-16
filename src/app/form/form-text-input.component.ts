// Component to be dynamically added to the DOM
import { Component } from '@angular/core';
import { FormTemplateBaseComponent } from './form-template-base.component';
import {ErrorStateMatcher} from '@angular/material/core';

@Component({
  selector: 'app-form-text-input',
  template: `
    <div class="form-group" [formGroup]="group">
      <mat-form-field>
        <input matInput [placeholder]="data.value.label" class="form-control" [formControlName]="data.id" [errorStateMatcher]="matcher">
      </mat-form-field>
    </div>
  `
})
export class FormTextInputComponent extends FormTemplateBaseComponent {
  matcher = new ErrorStateMatcher();
}
