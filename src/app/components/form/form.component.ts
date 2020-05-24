import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [DatePipe]
})
export class FormComponent implements OnInit {
  today: string;
  message:string;
  isFormEnabled: boolean;
  isSubmit:boolean;
  complexForm : FormGroup;
  list:any = [];
  item ;
  index:number;
  

  noRecordsFound = 'No patient records found in the list. Click on Register New Patient to add Patient details.';

  emptyFirstname = 'You must include a first name.';
  minlengthFirstname = 'Your first name must be at least 3 characters long.';
  maxlengthFirstname = 'Your first name cannot exceed 20 characters.';
  emptyLastname = 'You must include a last name.';
  minlengthLastname = 'Your last name must be at least 3 characters long.';
  maxlengthLastname = 'Your last name cannot exceed 20 characters.';
  noGender = 'You must select a gender.';
  noDob = 'You must select a valid date of birth.';
  noMobile = 'You must include mobile number.';
  numberMobile = 'You must enter a valid 10 digit mobile number.';
  maxlengthMobile = 'Your mobile number should not exceed 10 digits.';
  noEmail = 'You must include a valid email.';
  patternEmail = 'Pattern does not match.';
  noPriority = 'You must select a priority.';

  ngOnInit() {
    this.today = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
  }

  constructor( fb: FormBuilder,private datePipe: DatePipe){
    // write necessary validations
    this.complexForm = fb.group({
      'firstName' : [''],
      'lastName': [''],
      'gender' : [null],
      'dob' : [null],
      'mobile' : [''],
      'email' : [''],
      'priority' : [null],
      'description' : '',
      'fever' : false,
      'ear' :false,
      'heart' :false
    })
  }

  submitForm(value: any){
      //based on isSubmit property add/edit patient details
  }
    
  edit(item,i) {
      //form should be enabled(use isFormEnabled property)
      //restore selected patient details into form
  }
    
  delete(i) {
    //delete selected patient from list
  }

  addPatient() {
    //form should be enabled(use isFormEnabled property)
  }
  goback() {
    //form should be diasbled(use isFormEnabled property)
  }

}
