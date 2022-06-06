import { Component, Input, OnChanges, SimpleChanges,} from '@angular/core';
import { PersonalSurveyService } from '../personal-survey/personal-survey.service';
//import { JsonFormData, Surveycontroller } from "../models/personalsurveyModel"
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface Root {
  surveyid: number
  surveytype: string
  surveycontrollers: Surveycontroller[]
}

export interface Surveycontroller {
  id: string
  text: string
  type: string
  value: string
  flag: boolean
  validators: JsonFormValidators;
  optional?: boolean
}

interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}

export interface JsonFormData {
  controls: Surveycontroller[];
}

@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.css']
})
export class JsonFormComponent implements OnChanges {
  @Input() jsonFormData: any;
  public myForm: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}
  ngOnChanges(changes: SimpleChanges) {
    if (!changes['jsonFormData'].firstChange) {
      this.createForm(this.jsonFormData.controls);
    }
  }
  createForm(controls: Surveycontroller[]) {
    for (const control of controls) {
      const validatorsToAdd = [];
      for (const [key, value] of Object.entries(control.validators)) {
        switch (key) {
          case 'min':
            validatorsToAdd.push(Validators.min(value));
            break;
          case 'max':
            validatorsToAdd.push(Validators.max(value));
            break;
          case 'required':
            if (value) {
              validatorsToAdd.push(Validators.required);
            }
            break;
          case 'requiredTrue':
            if (value) {
              validatorsToAdd.push(Validators.requiredTrue);
            }
            break;
          case 'email':
            if (value) {
              validatorsToAdd.push(Validators.email);
            }
            break;
          case 'minLength':
            validatorsToAdd.push(Validators.minLength(value));
            break;
          case 'maxLength':
            validatorsToAdd.push(Validators.maxLength(value));
            break;
          case 'pattern':
            validatorsToAdd.push(Validators.pattern(value));
            break;
          case 'nullValidator':
            if (value) {
              validatorsToAdd.push(Validators.nullValidator);
            }
            break;
          default:
            break;
        }
      }
      this.myForm.addControl(
        control.text,
        this.fb.control(control.value, validatorsToAdd)
      );
    }
  }
  onSubmit() {
    console.log('Form valid: ', this.myForm.valid);
    console.log('Form values: ', this.myForm.value);
  }
}