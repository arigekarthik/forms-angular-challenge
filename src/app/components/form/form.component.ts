import { Component, OnInit, Input } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from "@angular/forms";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.css"],
  providers: [DatePipe],
})
export class FormComponent implements OnInit {
  today: string;
  message: string;
  isFormEnabled: boolean;
  isSubmit: boolean;
  complexForm: FormGroup;
  list: any = [];
  item;
  index: number = 0;

  noRecordsFound =
    "No patient records found in the list. Click on Register New Patient to add Patient details.";

  emptyFirstname = "You must include a first name.";
  minlengthFirstname = "Your first name must be at least 3 characters long.";
  maxlengthFirstname = "Your first name cannot exceed 20 characters.";
  emptyLastname = "You must include a last name.";
  minlengthLastname = "Your last name must be at least 3 characters long.";
  maxlengthLastname = "Your last name cannot exceed 20 characters.";
  noGender = "You must select a gender.";
  noDob = "You must select a valid date of birth.";
  noMobile = "You must include mobile number.";
  numberMobile = "You must enter a valid 10 digit mobile number.";
  maxlengthMobile = "Your mobile number should not exceed 10 digits.";
  noEmail = "You must include a valid email.";
  patternEmail = "Pattern does not match.";
  noPriority = "You must select a priority.";

  ngOnInit() {
    this.today = this.datePipe.transform(Date.now(), "yyyy-MM-dd");
    this.complexForm = this.fb.group({
      firstName: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      lastName: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(20),
      ]),
      gender: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      mobile: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]{10}$"),
        Validators.maxLength(10),
      ]),
      email: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$"),
      ]),
      priority: new FormControl(null, Validators.required),
      description: new FormControl(""),
      fever: new FormControl(false),
      ear: new FormControl(false),
      heart: new FormControl(false),
    });
    console.log(this.complexForm);
  }

  default = {
    firstName: "",
    lastName: "",
    gender: null,
    dob: null,
    mobile: "",
    email: "",
    priority: null,
    description: "",
    fever: false,
    ear: false,
    heart: false,
  };

  constructor(private fb: FormBuilder, private datePipe: DatePipe) {
    // write necessary validations
  }

  submitForm(value: any) {
    //based on isSubmit property add/edit patient details
    let f = value;
    console.log(f);
    let condition: any[] = [];
    if (f.fever) condition.push("Chronic fever/unexpected weight loss");
    if (f.ear) condition.push("Ear/nose/throat problems");
    if (f.heart) condition.push(" Heart problems");
    f["cd"] = condition;
    this.isFormEnabled = false;
    if (this.isSubmit) {
      this.list.push(f);
    } else {
      this.list[this.index] = f;
    }
    this.complexForm.reset();

    /*
    let form = value.value;
    console.log(form);
    let condition: any[];
    if (form.fever) condition.push("fever");
    if (form.ear) condition.push("ear");
    if (form.hear) condition.push("heart");
    form["condition"] = condition;
    this.list.push(form);
    console.log(form);
    this.isFormEnabled = false;
  */
  }

  edit(item, i) {
    //form should be enabled(use isFormEnabled property)
    //restore selected patient details into form
    console.log(item, i);
    this.complexForm.controls["firstName"].setValue(item.firstName);
    this.complexForm.controls["lastName"].setValue(item.lastName);
    this.complexForm.controls["gender"].setValue(item.gender);
    this.complexForm.controls["dob"].setValue(item.dob);
    this.complexForm.controls["mobile"].setValue(item.mobile);
    this.complexForm.controls["email"].setValue(item.email);
    this.complexForm.controls["priority"].setValue(item.priority);
    this.complexForm.controls["description"].setValue(item.description);
    this.complexForm.controls["fever"].setValue(item.fever);
    this.complexForm.controls["ear"].setValue(item.ear);
    this.complexForm.controls["heart"].setValue(item.heart);
    this.isFormEnabled = true;
    this.isSubmit = false;
    this.index = i;
  }

  delete(i) {
    //delete selected patient from list
    this.list.splice(this.index, 1);
  }

  addPatient() {
    //form should be enabled(use isFormEnabled property)
    this.isFormEnabled = true;
    this.isSubmit = true;
  }
  goback() {
    //form should be diasbled(use isFormEnabled property)
    this.isFormEnabled = false;
  }
  prt() {
    console.log(this.complexForm);
  }
}
