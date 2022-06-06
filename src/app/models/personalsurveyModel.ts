export interface Root {
    surveyid: number
    surveytype: string
    surveycontrollers: Surveycontroller[]
  }
  
  export interface Surveycontroller {
    id: string
    text: string
    type: string
    flag: boolean
    validators: Validators
    optional?: boolean
  }
  
  export interface Validators {
    required: boolean
    minLength?: number
  }
  
  export interface JsonFormData {
    controls: Surveycontroller[];
  }