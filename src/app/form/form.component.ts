import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  template: `
    <form [formGroup]="heroForm">
      <app-form-item *ngFor="let item of items.fields" [data]="item" [group]="heroForm"></app-form-item>
    </form>
  `
})
export class FormComponent {

  heroForm: FormGroup;

  // @ts-ignore
  public items = require('./data.json');

  constructor() {
    this.toFormGroup(this.items);
  }

  toFormGroup(questions) {
    let group: any = {};
    let requiredArr = [];

    questions.fields.forEach(question => {
      question.validation.forEach(item =>  {
        (item.type == "required") ? requiredArr.push(Validators[item.type]) : requiredArr.push(Validators[item.type](item.arguments));
      });
      group[question.id] = new FormControl(question.data || '', requiredArr);
    });

    this.heroForm = new FormGroup(group);
  }

}
