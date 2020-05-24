import { async, ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { AbstractControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';

import { FormComponent } from './form.component';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let firstnameCtrl: AbstractControl;
  let lastnameCtrl: AbstractControl;
  let genderCtrl: AbstractControl;
  let dobCtrl: AbstractControl;
  let mobileCtrl: AbstractControl;
  let emailCtrl: AbstractControl;
  let priorityCtrl: AbstractControl;

  let addUser;
  let noRecordsFound;

  let errorAlertNoFirstname = HTMLElement;
  let errorAlertMinlengthFirstname = HTMLElement;
  let errorAlertMaxlengthFirstname = HTMLElement;

  let errorAlertNoLastname = HTMLElement;
  let errorAlertMinlengthLastname = HTMLElement;
  let errorAlertMaxlengthLastname = HTMLElement;

  let errorAlertNoGender = HTMLElement;

  let errorAlertNoDob = HTMLElement;

  let errorAlertNoMobile = HTMLElement;
  let errorAlertNumberMobile = HTMLElement;
  let errorAlertMaxlengthMobile = HTMLElement;

  let errorAlertNoEmail = HTMLElement;
  let errorAlertPatternEmail = HTMLElement;

  let errorAlertNoPriority = HTMLElement;

  let elemSubmitBtn = HTMLElement;

  let arrayList =
  [{
    'firstName': 'saravana',
    'lastName': 'suthan',
    'gender': 'male',
    'dob': '1996-10-27',
    'mobile': '9876543210',
    'email': 'saran@gmail.com',
    'priority': 'normal',
    'description':'',
    'fever': '',
    'ear': '',
    'heart':''
  }];

  let arrayListDelete =
  [
    {
      'firstName': 'nameone',
      'lastName': 'suthan',
      'gender': 'male',
      'dob': '1996-10-27',
      'mobile': '9876543210',
      'email': 'saran@gmail.com',
      'priority': 'normal',
      'description':'',
      'fever': '',
      'ear': '',
      'heart':''
    },
    {
      'firstName': 'nametwo',
      'lastName': 'suthan',
      'gender': 'male',
      'dob': '1996-10-27',
      'mobile': '9876543210',
      'email': 'saran@gmail.com',
      'priority': 'normal',
      'description':'',
      'fever': '',
      'ear': '',
      'heart':''
    },
    {
      'firstName': 'namethree',
      'lastName': 'suthan',
      'gender': 'male',
      'dob': '1996-10-27',
      'mobile': '9876543210',
      'email': 'saran@gmail.com',
      'priority': 'normal',
      'description':'',
      'fever': '',
      'ear': '',
      'heart':''
    },
    {
      'firstName': 'namefour',
      'lastName': 'suthan',
      'gender': 'male',
      'dob': '1996-10-27',
      'mobile': '9876543210',
      'email': 'saran@gmail.com',
      'priority': 'normal',
      'description':'',
      'fever': '',
      'ear': '',
      'heart':''
    },
  ];

let deleteresult =
  {
    'firstName': 'check',
    'lastName': 'suthan',
    'gender': 'male',
    'dob': '1996-10-27',
    'mobile': '9876543210',
    'email': 'saran@gmail.com',
    'priority': 'normal',
    'description':'',
    'fever': '',
    'ear': '',
    'heart':''
  };
let successful =
  {
    firstName: 'patient',
    lastName: 'name',
    gender: 'male',
    dob: '1996-10-27',
    mobile: '8870783265',
    email: 'saran@gmail.com',
    priority: 'normal',
    description: '',
    fever: '',
    ear: '',
    heart: ''
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;

    errorAlertNoFirstname = fixture.nativeElement.querySelector('#error-no-firstname');
    errorAlertMinlengthFirstname = fixture.nativeElement.querySelector('#error-minlength-firstname');
    errorAlertMaxlengthFirstname = fixture.nativeElement.querySelector('#error-maxlength-firstname');

    errorAlertNoLastname = fixture.nativeElement.querySelector('#error-no-lastname');
    errorAlertMinlengthLastname = fixture.nativeElement.querySelector('#error-minlength-lastname');
    errorAlertMaxlengthLastname = fixture.nativeElement.querySelector('#error-maxlength-lastname');

    errorAlertNoGender = fixture.nativeElement.querySelector('#error-no-gender');

    errorAlertNoDob = fixture.nativeElement.querySelector('#error-no-dob');

    errorAlertNoMobile = fixture.nativeElement.querySelector('#error-no-mobile');
    errorAlertNumberMobile = fixture.nativeElement.querySelector('#error-number-mobile');
    errorAlertMaxlengthMobile = fixture.nativeElement.querySelector('#error-maxlength-mobile');

    errorAlertNoEmail = fixture.nativeElement.querySelector('#error-no-email');
    errorAlertPatternEmail = fixture.nativeElement.querySelector('#error-pattern-email');

    errorAlertNoPriority = fixture.nativeElement.querySelector('#error-no-priority');

    elemSubmitBtn = fixture.nativeElement.querySelector('#submit-btn');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('All validation errors should be hidden and form should be invalid by default', fakeAsync(() => {
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(component.complexForm.valid).toBeFalsy();

      expect(errorAlertNoFirstname).toBeFalsy();
      expect(errorAlertMinlengthFirstname).toBeFalsy();
      expect(errorAlertMaxlengthFirstname).toBeFalsy();

      expect(errorAlertNoLastname).toBeFalsy();
      expect(errorAlertMinlengthLastname).toBeFalsy();
      expect(errorAlertMaxlengthMobile).toBeFalsy();

      expect(errorAlertNoGender).toBeFalsy();

      expect(errorAlertNoDob).toBeFalsy();

      expect(errorAlertNoMobile).toBeFalsy();
      expect(errorAlertNumberMobile).toBeFalsy();
      expect(errorAlertNoGender).toBeFalsy();

      expect(errorAlertNoEmail).toBeFalsy();
      expect(errorAlertPatternEmail).toBeFalsy();

      expect(errorAlertNoPriority).toBeFalsy();

    });
  }));

  it('should display No records found message for empty list', fakeAsync(() => {
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {

      noRecordsFound = fixture.nativeElement.querySelector('#no-records');
      expect(noRecordsFound).toBeTruthy();
      expect(fixture.nativeElement.querySelector('#no-records').textContent.trim()).toBe('No patient records found in the list. Click on Register New Patient to add Patient details.');
    });
  }));

  it('should not display form by default', fakeAsync(() => {
    component.ngOnInit();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {

      addUser = fixture.nativeElement.querySelector('#form-container');
      expect(addUser).toBeFalsy();
    });
  }));


  it('form(Result division) should be enabled when clicking on Register new patient', fakeAsync(() => {
    fixture.nativeElement.querySelector('#add-user').click();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    addUser = fixture.nativeElement.querySelector('#form-container');
    expect(addUser).toBeTruthy();
    });
  }));

  it('addPatient method have been called when clicking on Register new patient', fakeAsync(() => {

    spyOn(component, 'addPatient').and.callThrough();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.nativeElement.querySelector('#add-user').click();
      fixture.detectChanges();
      expect(component.addPatient).toHaveBeenCalled();
      expect(component.isFormEnabled).toBe(true);
      expect(component.isSubmit).toBe(true);
      addUser = fixture.nativeElement.querySelector('#form-container');
      expect(addUser).toBeTruthy();
    });
  }));

  it('should display no firstname validation error when the field kept as null(dirty)', fakeAsync(() => {
    fixture.nativeElement.querySelector('#add-user').click();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    addUser = fixture.nativeElement.querySelector('#form-container');
    expect(addUser).toBeTruthy();

      firstnameCtrl = component.complexForm.controls['firstName'];
      const elemInput: HTMLInputElement = fixture.nativeElement.querySelector('#firstname');
      elemInput.value = '';
      elemInput.dispatchEvent(new Event('input'));
      expect(component.complexForm.valid).toBeFalsy();
      tick();
      fixture.detectChanges();
      errorAlertNoFirstname = fixture.nativeElement.querySelector('#error-no-firstname');
      errorAlertMinlengthFirstname = fixture.nativeElement.querySelector('#error-minlength-firstname');
      errorAlertMaxlengthFirstname = fixture.nativeElement.querySelector('#error-maxlength-firstname');
      expect(firstnameCtrl.valid).toBeFalsy();
      expect(errorAlertNoFirstname).toBeTruthy();
      expect(errorAlertMinlengthFirstname).toBeFalsy();
      expect(errorAlertMaxlengthFirstname).toBeFalsy();
      expect(fixture.nativeElement.querySelector('#error-no-firstname').textContent.trim()).toBe('You must include a first name.');
    });
  }));

  it('should display firstname minimum length validation error when the field has less than 3 length', fakeAsync(() => {
    fixture.nativeElement.querySelector('#add-user').click();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    addUser = fixture.nativeElement.querySelector('#form-container');
    expect(addUser).toBeTruthy();

      firstnameCtrl = component.complexForm.controls['firstName'];
      const elemInput: HTMLInputElement = fixture.nativeElement.querySelector('#firstname');
      elemInput.value = 'aa';
      elemInput.dispatchEvent(new Event('input'));
      expect(component.complexForm.valid).toBeFalsy();
      tick();
      fixture.detectChanges();
      errorAlertMinlengthFirstname = fixture.nativeElement.querySelector('#error-minlength-firstname');
      errorAlertNoFirstname = fixture.nativeElement.querySelector('#error-no-firstname');
      errorAlertMaxlengthFirstname = fixture.nativeElement.querySelector('#error-maxlength-firstname');
      expect(firstnameCtrl.valid).toBeFalsy();
      expect(errorAlertMinlengthFirstname).toBeTruthy();
      expect(fixture.nativeElement.querySelector('#error-minlength-firstname').textContent.trim()).toBe('Your first name must be at least 3 characters long.');
      expect(errorAlertNoFirstname).toBeFalsy();
      expect(errorAlertMaxlengthFirstname).toBeFalsy();
    });
  }));

  it('should display firstname maximun length validation error when the field has greater than 20 length', fakeAsync(() => {
    fixture.nativeElement.querySelector('#add-user').click();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    addUser = fixture.nativeElement.querySelector('#form-container');
    expect(addUser).toBeTruthy();

      firstnameCtrl = component.complexForm.controls['firstName'];
      const elemInput: HTMLInputElement = fixture.nativeElement.querySelector('#firstname');
      elemInput.value = 'aaffffffffffffffffffffffff';
      elemInput.dispatchEvent(new Event('input'));
      expect(component.complexForm.valid).toBeFalsy();
      tick();
      fixture.detectChanges();
      errorAlertMinlengthFirstname = fixture.nativeElement.querySelector('#error-minlength-firstname');
      errorAlertNoFirstname = fixture.nativeElement.querySelector('#error-no-firstname');
      errorAlertMaxlengthFirstname = fixture.nativeElement.querySelector('#error-maxlength-firstname');
      expect(firstnameCtrl.valid).toBeFalsy();
      expect(errorAlertMinlengthFirstname).toBeFalsy();
      expect(errorAlertNoFirstname).toBeFalsy();
      expect(errorAlertMaxlengthFirstname).toBeTruthy();
      expect(fixture.nativeElement.querySelector('#error-maxlength-firstname').textContent.trim()).toBe('Your first name cannot exceed 20 characters.');
    });
  }));

  it('should display no firstname validation error when the field kept as null(dirty)', fakeAsync(() => {
    fixture.nativeElement.querySelector('#add-user').click();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    addUser = fixture.nativeElement.querySelector('#form-container');
    expect(addUser).toBeTruthy();

      lastnameCtrl = component.complexForm.controls['lastName'];
      const elemInput: HTMLInputElement = fixture.nativeElement.querySelector('#lastname');
      elemInput.value = '';
      elemInput.dispatchEvent(new Event('input'));
      expect(component.complexForm.valid).toBeFalsy();
      tick();
      fixture.detectChanges();
      errorAlertNoLastname = fixture.nativeElement.querySelector('#error-no-lastname');
      errorAlertMinlengthLastname = fixture.nativeElement.querySelector('#error-minlength-lastname');
      errorAlertMaxlengthLastname = fixture.nativeElement.querySelector('#error-maxlength-lastname');
      expect(firstnameCtrl.valid).toBeFalsy();
      expect(errorAlertNoLastname).toBeTruthy();
      expect(errorAlertMinlengthLastname).toBeFalsy();
      expect(errorAlertMaxlengthLastname).toBeFalsy();
      expect(fixture.nativeElement.querySelector('#error-no-lastname').textContent.trim()).toBe('You must include a last name.');
    });
  }));

  it('should display lastname minimum length validation error when the field has less than 3 length', fakeAsync(() => {
    fixture.nativeElement.querySelector('#add-user').click();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    addUser = fixture.nativeElement.querySelector('#form-container');
    expect(addUser).toBeTruthy();

      lastnameCtrl = component.complexForm.controls['lastName'];
      const elemInput: HTMLInputElement = fixture.nativeElement.querySelector('#lastname');
      elemInput.value = 'aa';
      elemInput.dispatchEvent(new Event('input'));
      expect(component.complexForm.valid).toBeFalsy();
      tick();
      fixture.detectChanges();
      errorAlertMinlengthLastname = fixture.nativeElement.querySelector('#error-minlength-lastname');
      errorAlertNoLastname = fixture.nativeElement.querySelector('#error-no-lastname');
      errorAlertMaxlengthLastname = fixture.nativeElement.querySelector('#error-maxlength-lastname');
      expect(lastnameCtrl.valid).toBeFalsy();
      expect(errorAlertMinlengthLastname).toBeTruthy();
      expect(fixture.nativeElement.querySelector('#error-minlength-lastname').textContent.trim()).toBe('Your last name must be at least 3 characters long.');
      expect(errorAlertNoLastname).toBeFalsy();
      expect(errorAlertMaxlengthLastname).toBeFalsy();
    });
  }));

  it('should display lastname maximun length validation error when the field has greater than 20 length', fakeAsync(() => {
    fixture.nativeElement.querySelector('#add-user').click();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    addUser = fixture.nativeElement.querySelector('#form-container');
    expect(addUser).toBeTruthy();

      lastnameCtrl = component.complexForm.controls['lastName'];
      const elemInput: HTMLInputElement = fixture.nativeElement.querySelector('#lastname');
      elemInput.value = 'aaffffffffffffffffffffffff';
      elemInput.dispatchEvent(new Event('input'));
      expect(component.complexForm.valid).toBeFalsy();
      tick();
      fixture.detectChanges();
      errorAlertMinlengthLastname = fixture.nativeElement.querySelector('#error-minlength-lastname');
      errorAlertNoLastname = fixture.nativeElement.querySelector('#error-no-lastname');
      errorAlertMaxlengthLastname = fixture.nativeElement.querySelector('#error-maxlength-lastname');
      expect(lastnameCtrl.valid).toBeFalsy();
      expect(errorAlertMinlengthLastname).toBeFalsy();
      expect(errorAlertNoLastname).toBeFalsy();
      expect(errorAlertMaxlengthLastname).toBeTruthy();
      expect(fixture.nativeElement.querySelector('#error-maxlength-lastname').textContent.trim()).toBe('Your last name cannot exceed 20 characters.');
    });
  }));



  it('gender field validity', () => {
    let errors = {};
    genderCtrl = component.complexForm.controls['gender'];
    expect(genderCtrl.valid).toBeFalsy();

    errors = genderCtrl.errors || {};
    expect(errors['required']).toBeTruthy();

    genderCtrl.setValue('male');
    errors = genderCtrl.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('gender validation gets pass when clicking male radio button', fakeAsync(() => {
    fixture.nativeElement.querySelector('#add-user').click();
    fixture.detectChanges();
    fixture.nativeElement.querySelector('#male').click();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    addUser = fixture.nativeElement.querySelector('#form-container');
    expect(addUser).toBeTruthy();

      errorAlertNoGender = fixture.nativeElement.querySelector('#error-no-gender');
      expect(genderCtrl.valid).toBeTruthy();
      expect(errorAlertNoGender).toBeFalsy();
    });
  }));


  it('gender validation gets pass when clicking female radio button', fakeAsync(() => {
    fixture.nativeElement.querySelector('#add-user').click();
    fixture.detectChanges();
    fixture.nativeElement.querySelector('#female').click();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    addUser = fixture.nativeElement.querySelector('#form-container');
    expect(addUser).toBeTruthy();

      errorAlertNoGender = fixture.nativeElement.querySelector('#error-no-gender');
      expect(genderCtrl.valid).toBeTruthy();
      expect(errorAlertNoGender).toBeFalsy();
    });
  }));

  it('should display no date of birth validation error when the field kept as null(dirty)', fakeAsync(() => {
    fixture.nativeElement.querySelector('#add-user').click();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    addUser = fixture.nativeElement.querySelector('#form-container');
    expect(addUser).toBeTruthy();

      dobCtrl = component.complexForm.controls['dob'];
      const elemInput: HTMLInputElement = fixture.nativeElement.querySelector('#date-input');
      elemInput.value = '';
      elemInput.dispatchEvent(new Event('input'));
      expect(component.complexForm.valid).toBeFalsy();
      tick();
      fixture.detectChanges();
      errorAlertNoDob = fixture.nativeElement.querySelector('#error-no-dob');
      expect(dobCtrl.valid).toBeFalsy();
      expect(errorAlertNoDob).toBeTruthy();
      expect(fixture.nativeElement.querySelector('#error-no-dob').textContent.trim()).toBe('You must select a valid date of birth.');
    });
  }));

  it('Date of birth validation gets pass when the field has valid value', fakeAsync(() => {
    fixture.nativeElement.querySelector('#add-user').click();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    addUser = fixture.nativeElement.querySelector('#form-container');
    expect(addUser).toBeTruthy();

      dobCtrl = component.complexForm.controls['dob'];
      const elemInput: HTMLInputElement = fixture.nativeElement.querySelector('#date-input');
      elemInput.value = '2018-12-25';
      elemInput.dispatchEvent(new Event('input'));
      expect(component.complexForm.valid).toBeFalsy();
      tick();
      fixture.detectChanges();
      errorAlertNoDob = fixture.nativeElement.querySelector('#error-no-dob');
      expect(dobCtrl.valid).toBeTruthy();
      expect(errorAlertNoDob).toBeFalsy();
    });
  }));

  it('mobile field validity', () => {
    let errors = {};
    mobileCtrl = component.complexForm.controls['mobile'];
    expect(mobileCtrl.valid).toBeFalsy();

    errors = mobileCtrl.errors || {};
    expect(errors['required']).toBeTruthy();

    mobileCtrl.setValue('123456');
    errors = mobileCtrl.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();
    // expect(errors['maxLength']).toBeFalsy();

    mobileCtrl.setValue('12345678901343');
    errors = mobileCtrl.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
    // expect(errors['maxLength']).toBeFalsy();


    mobileCtrl.setValue('1234567a9');
    errors = mobileCtrl.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    mobileCtrl.setValue('1234567890');
    errors = mobileCtrl.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
    //expect(errors['maxlength']).toBeTruthy();


  });

  it('should display no mobile number validation error when the field has kept as null(dirty)', fakeAsync(() => {
    fixture.nativeElement.querySelector('#add-user').click();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    addUser = fixture.nativeElement.querySelector('#form-container');
    expect(addUser).toBeTruthy();

      mobileCtrl = component.complexForm.controls['mobile'];
      const elemInput: HTMLInputElement = fixture.nativeElement.querySelector('#mobile');
      elemInput.value = '';
      elemInput.dispatchEvent(new Event('input'));
      expect(component.complexForm.valid).toBeFalsy();
      tick();
      fixture.detectChanges();
      errorAlertNoMobile = fixture.nativeElement.querySelector('#error-no-mobile');
      errorAlertNumberMobile = fixture.nativeElement.querySelector('#error-number-mobile');
      errorAlertMaxlengthMobile = fixture.nativeElement.querySelector('#error-maxlength-mobile');
      expect(mobileCtrl.valid).toBeFalsy();
      expect(errorAlertNoMobile).toBeTruthy();
      expect(errorAlertNumberMobile).toBeFalsy();
      expect(errorAlertMaxlengthMobile).toBeFalsy();
      expect(fixture.nativeElement.querySelector('#error-no-mobile').textContent.trim()).toBe('You must include mobile number.');
    });
  }));

  it('should display mobile number pattern validation error when the field has value', fakeAsync(() => {
    fixture.nativeElement.querySelector('#add-user').click();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    addUser = fixture.nativeElement.querySelector('#form-container');
    expect(addUser).toBeTruthy();

      mobileCtrl = component.complexForm.controls['mobile'];
      const elemInput: HTMLInputElement = fixture.nativeElement.querySelector('#mobile');
      elemInput.value = '123456';
      elemInput.dispatchEvent(new Event('input'));
      expect(component.complexForm.valid).toBeFalsy();
      tick();
      fixture.detectChanges();
      errorAlertNoMobile = fixture.nativeElement.querySelector('#error-no-mobile');
      errorAlertNumberMobile = fixture.nativeElement.querySelector('#error-number-mobile');
      errorAlertMaxlengthMobile = fixture.nativeElement.querySelector('#error-maxlength-mobile');
      expect(mobileCtrl.valid).toBeFalsy();
      expect(errorAlertNoMobile).toBeFalsy();
      expect(errorAlertNumberMobile).toBeTruthy();
      expect(errorAlertMaxlengthMobile).toBeFalsy();
      expect(fixture.nativeElement.querySelector('#error-number-mobile').textContent.trim()).toBe('You must enter a valid 10 digit mobile number.');
    });
  }));

  it('should display mobile maximun length validation error when the field has greater than 10 length', fakeAsync(() => {
    fixture.nativeElement.querySelector('#add-user').click();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    addUser = fixture.nativeElement.querySelector('#form-container');
    expect(addUser).toBeTruthy();

      mobileCtrl = component.complexForm.controls['mobile'];
      const elemInput: HTMLInputElement = fixture.nativeElement.querySelector('#mobile');
      elemInput.value = '1234567890123';
      elemInput.dispatchEvent(new Event('input'));
      expect(component.complexForm.valid).toBeFalsy();
      tick();
      fixture.detectChanges();
      errorAlertNoMobile = fixture.nativeElement.querySelector('#error-no-mobile');
      errorAlertNumberMobile = fixture.nativeElement.querySelector('#error-number-mobile');
      errorAlertMaxlengthMobile = fixture.nativeElement.querySelector('#error-maxlength-mobile');
      expect(mobileCtrl.valid).toBeFalsy();
      expect(errorAlertNoMobile).toBeFalsy();
      expect(errorAlertNumberMobile).toBeFalsy();
      expect(errorAlertMaxlengthMobile).toBeTruthy();
      expect(fixture.nativeElement.querySelector('#error-maxlength-mobile').textContent.trim()).toBe('Your mobile number should not exceed 10 digits.');
    });
  }));

  it('should display no email validation error when the field has kept as null(dirty)', fakeAsync(() => {
    fixture.nativeElement.querySelector('#add-user').click();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    addUser = fixture.nativeElement.querySelector('#form-container');
    expect(addUser).toBeTruthy();

      emailCtrl = component.complexForm.controls['email'];
      const elemInput: HTMLInputElement = fixture.nativeElement.querySelector('#email');
      elemInput.value = '';
      elemInput.dispatchEvent(new Event('input'));
      expect(component.complexForm.valid).toBeFalsy();
      tick();
      fixture.detectChanges();
      errorAlertNoEmail = fixture.nativeElement.querySelector('#error-no-email');
      errorAlertPatternEmail = fixture.nativeElement.querySelector('#error-pattern-email');

      expect(emailCtrl.valid).toBeFalsy();
      expect(errorAlertNoEmail).toBeTruthy();
      expect(errorAlertPatternEmail).toBeFalsy();

      expect(fixture.nativeElement.querySelector('#error-no-email').textContent.trim()).toBe('You must include a valid email.');
    });
  }));

  it('should display  email pattern validation error when the field has no value', fakeAsync(() => {
    fixture.nativeElement.querySelector('#add-user').click();
    fixture.detectChanges();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
    addUser = fixture.nativeElement.querySelector('#form-container');
    expect(addUser).toBeTruthy();

      emailCtrl = component.complexForm.controls['email'];
      const elemInput: HTMLInputElement = fixture.nativeElement.querySelector('#email');
      elemInput.value = 'jgkff!@df.vv';
      elemInput.dispatchEvent(new Event('input'));
      expect(component.complexForm.valid).toBeFalsy();
      tick();
      fixture.detectChanges();
      errorAlertNoEmail = fixture.nativeElement.querySelector('#error-no-email');
      errorAlertPatternEmail = fixture.nativeElement.querySelector('#error-pattern-email');

      expect(emailCtrl.valid).toBeFalsy();
      expect(errorAlertNoEmail).toBeFalsy();
      expect(errorAlertPatternEmail).toBeTruthy();

      expect(fixture.nativeElement.querySelector('#error-pattern-email').textContent.trim()).toBe('Pattern does not match.');
    });
  }));

  it('priority field validity', () => {
    let errors = {};
    priorityCtrl = component.complexForm.controls['priority'];
    expect(priorityCtrl.valid).toBeFalsy();

    priorityCtrl.setValue('');
    errors = priorityCtrl.errors || {};
    expect(errors['required']).toBeTruthy();

    priorityCtrl.setValue('normal');
    errors = priorityCtrl.errors || {};
    expect(errors['required']).toBeFalsy();
  });

  it('should call submitform method for valid form', fakeAsync(() => {
    component.isFormEnabled = true;
    component.complexForm.controls['firstName'].setValue('saravana');
    component.complexForm.controls['lastName'].setValue('suthan');
    component.complexForm.controls['gender'].setValue('male');
    component.complexForm.controls['dob'].setValue('2018-12-25');
    component.complexForm.controls['mobile'].setValue('8870783265');
    component.complexForm.controls['email'].setValue('saran@gmail.com');
    component.complexForm.controls['priority'].setValue('normal');
    component.complexForm.controls['description'].setValue('');
    component.complexForm.controls['fever'].setValue('');
    component.complexForm.controls['ear'].setValue('');
    component.complexForm.controls['heart'].setValue('');
    expect(component.complexForm.valid).toBeTruthy();
    spyOn(component, 'submitForm').and.callThrough();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.nativeElement.querySelector('#submit-btn').click();
      fixture.detectChanges();
      expect(component.submitForm).toHaveBeenCalled();
    });
  }));

  it('should not call submitform method for invalid form(invalid mobile)', fakeAsync(() => {
    component.isFormEnabled = true;
    component.complexForm.controls['firstName'].setValue('saravana');
    component.complexForm.controls['lastName'].setValue('suthan');
    component.complexForm.controls['gender'].setValue('male');
    component.complexForm.controls['dob'].setValue('2018-12-25');
    component.complexForm.controls['mobile'].setValue('8870s783265');
    component.complexForm.controls['email'].setValue('saran@gmail.com');
    component.complexForm.controls['priority'].setValue('normal');
    component.complexForm.controls['description'].setValue('');
    component.complexForm.controls['fever'].setValue('');
    component.complexForm.controls['ear'].setValue('');
    component.complexForm.controls['heart'].setValue('');
    expect(component.complexForm.valid).toBeFalsy();
    spyOn(component, 'submitForm').and.callThrough();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.nativeElement.querySelector('#submit-btn').click();
      fixture.detectChanges();
      expect(component.submitForm).not.toHaveBeenCalled();
    });
  }));

  it('store in array for successful registration', fakeAsync(() => {
    component.isFormEnabled = true;
    component.complexForm.controls['firstName'].setValue('patient');
    component.complexForm.controls['lastName'].setValue('name');
    component.complexForm.controls['gender'].setValue('male');
    component.complexForm.controls['dob'].setValue('1996-10-27');
    component.complexForm.controls['mobile'].setValue('8870783265');
    component.complexForm.controls['email'].setValue('saran@gmail.com');
    component.complexForm.controls['priority'].setValue('normal');
    component.complexForm.controls['description'].setValue('');
    component.complexForm.controls['fever'].setValue('');
    component.complexForm.controls['ear'].setValue('');
    component.complexForm.controls['heart'].setValue('');
    expect(component.complexForm.valid).toBeTruthy();
    spyOn(component, 'submitForm').and.callThrough();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.nativeElement.querySelector('#submit-btn').click();
      fixture.detectChanges();
      expect(component.submitForm).toHaveBeenCalled();
      expect(component.list.length).toBe(1);
      expect(component.list[0].email).toBe('saran@gmail.com');
      expect(fixture.nativeElement.querySelector('#table-lastname').textContent.trim()).toBe('name');
      expect(fixture.nativeElement.querySelector('#table-condition').textContent.trim()).toBe('----');
      expect(fixture.nativeElement.querySelector('#table-description').textContent.trim()).toBe('----');
    });
  }));

  it('Edit user', fakeAsync(() => {
    component.isFormEnabled = true;
    component.complexForm.controls['firstName'].setValue('patient');
    component.complexForm.controls['lastName'].setValue('name');
    component.complexForm.controls['gender'].setValue('male');
    component.complexForm.controls['dob'].setValue('1996-10-27');
    component.complexForm.controls['mobile'].setValue('8870783265');
    component.complexForm.controls['email'].setValue('saran@gmail.com');
    component.complexForm.controls['priority'].setValue('normal');
    component.complexForm.controls['description'].setValue('');
    component.complexForm.controls['fever'].setValue('');
    component.complexForm.controls['ear'].setValue('');
    component.complexForm.controls['heart'].setValue('');
    expect(component.complexForm.valid).toBeTruthy();
    spyOn(component, 'submitForm').and.callThrough();
    spyOn(component, 'edit').and.callThrough();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.nativeElement.querySelector('#submit-btn').click();
      fixture.detectChanges();
      expect(component.submitForm).toHaveBeenCalled();
      expect(component.list.length).toBe(1);
      expect(component.list[0].lastName).toBe('name');
      expect(fixture.nativeElement.querySelector('#table-lastname').textContent.trim()).toBe('name');

      fixture.nativeElement.querySelector('#user-edit').click();
      fixture.detectChanges();
      expect(component.edit).toHaveBeenCalled();
      expect(component.isFormEnabled).toBe(true);
      expect(component.isSubmit).toBe(false);
      expect(component.index).toBe(0);
      addUser = fixture.nativeElement.querySelector('#form-container');
      expect(addUser).toBeTruthy();
      component.submitForm(arrayList);
      expect(component.list.length).toBe(1);
      // expect(fixture.nativeElement.querySelector('#lastname').textContent.trim()).toBe('suthan');
    });
  }));


  it('check edit using arraylist length', fakeAsync(() => {
    component.isFormEnabled = true;
    component.list = arrayList;
    expect(component.list.length).toBe(1);
    component.isSubmit = false;
    component.submitForm(arrayList);
    expect(component.list.length).toBe(1);
  }));

  it('check delete using arraylist length', fakeAsync(() => {
    component.list = arrayListDelete;
    expect(component.list.length).toBe(4);
    component.delete(2);
    expect(component.list.length).toBe(3);
    expect(component.list[2].firstName).toBe('namefour');
  }));

  it('goback method have been called when clicking on close', fakeAsync(() => {

    spyOn(component, 'addPatient').and.callThrough();
    spyOn(component, 'goback').and.callThrough();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.nativeElement.querySelector('#add-user').click();
      fixture.detectChanges();
      expect(component.addPatient).toHaveBeenCalled();
      expect(component.isFormEnabled).toBe(true);
      expect(component.isSubmit).toBe(true);
      addUser = fixture.nativeElement.querySelector('#form-container');
      expect(addUser).toBeTruthy();
      fixture.nativeElement.querySelector('#close-form').click();
      fixture.detectChanges();
      expect(component.addPatient).toHaveBeenCalled();
    });
  }));

  it('should hide form when clicking on close', fakeAsync(() => {

    spyOn(component, 'addPatient').and.callThrough();
    spyOn(component, 'goback').and.callThrough();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.nativeElement.querySelector('#add-user').click();
      fixture.detectChanges();
      expect(component.addPatient).toHaveBeenCalled();
      expect(component.isFormEnabled).toBe(true);
      expect(component.isSubmit).toBe(true);
      addUser = fixture.nativeElement.querySelector('#form-container');
      expect(addUser).toBeTruthy();
      fixture.nativeElement.querySelector('#close-form').click();
      fixture.detectChanges();
      expect(component.addPatient).toHaveBeenCalled();
      addUser = fixture.nativeElement.querySelector('#form-container');
      expect(addUser).toBeFalsy();
    });
  }));

  it('should set checkbox value when checkbox is checked(true) for add patient', fakeAsync(() => {
    component.isFormEnabled = true;
    component.complexForm.controls['firstName'].setValue('saravana');
    component.complexForm.controls['lastName'].setValue('suthan');
    component.complexForm.controls['gender'].setValue('male');
    component.complexForm.controls['dob'].setValue('2018-12-25');
    component.complexForm.controls['mobile'].setValue('8870783265');
    component.complexForm.controls['email'].setValue('saran@gmail.com');
    component.complexForm.controls['priority'].setValue('normal');
    component.complexForm.controls['description'].setValue('');
    component.complexForm.controls['fever'].setValue(true);
    component.complexForm.controls['ear'].setValue(true);
    component.complexForm.controls['heart'].setValue(true);
    expect(component.complexForm.valid).toBeTruthy();
    spyOn(component, 'submitForm').and.callThrough();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.nativeElement.querySelector('#submit-btn').click();
      fixture.detectChanges();
      expect(component.submitForm).toHaveBeenCalled();
    });
  }));

  it('should set checkbox value when checkbox is checked(false) for edit patient ', fakeAsync(() => {
    component.isFormEnabled = true;
    component.isSubmit = false;
    component.complexForm.controls['firstName'].setValue('saravana');
    component.complexForm.controls['lastName'].setValue('suthan');
    component.complexForm.controls['gender'].setValue('male');
    component.complexForm.controls['dob'].setValue('2018-12-25');
    component.complexForm.controls['mobile'].setValue('8870783265');
    component.complexForm.controls['email'].setValue('saran@gmail.com');
    component.complexForm.controls['priority'].setValue('normal');
    component.complexForm.controls['description'].setValue('');
    component.complexForm.controls['fever'].setValue(false);
    component.complexForm.controls['ear'].setValue(false);
    component.complexForm.controls['heart'].setValue(false);
    expect(component.complexForm.valid).toBeTruthy();
    spyOn(component, 'submitForm').and.callThrough();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.nativeElement.querySelector('#submit-btn').click();
      fixture.detectChanges();
      expect(component.submitForm).toHaveBeenCalled();
    });
  }));

  it('check current condition content in table(fever,ear=true)', fakeAsync(() => {
    component.isFormEnabled = true;
    component.complexForm.controls['firstName'].setValue('patient');
    component.complexForm.controls['lastName'].setValue('name');
    component.complexForm.controls['gender'].setValue('male');
    component.complexForm.controls['dob'].setValue('1996-10-27');
    component.complexForm.controls['mobile'].setValue('8870783265');
    component.complexForm.controls['email'].setValue('saran@gmail.com');
    component.complexForm.controls['priority'].setValue('normal');
    component.complexForm.controls['description'].setValue('');
    component.complexForm.controls['fever'].setValue(true);
    component.complexForm.controls['ear'].setValue(true);
    component.complexForm.controls['heart'].setValue(false);
    expect(component.complexForm.valid).toBeTruthy();
    spyOn(component, 'submitForm').and.callThrough();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.nativeElement.querySelector('#submit-btn').click();
      fixture.detectChanges();
      expect(component.submitForm).toHaveBeenCalled();
      expect(component.list.length).toBe(1);
      expect(component.list[0].email).toBe('saran@gmail.com');
      expect(fixture.nativeElement.querySelector('#table-lastname').textContent.trim()).toBe('name');
      expect(fixture.nativeElement.querySelector('#table-condition').textContent.trim()).toBe('Chronic fever/unexpected weight loss,Ear/nose/throat problems');
      expect(fixture.nativeElement.querySelector('#table-description').textContent.trim()).toBe('----');
    });
  }));

  it('check current condition content in table(fever,heart=true)', fakeAsync(() => {
    component.isFormEnabled = true;
    component.complexForm.controls['firstName'].setValue('patient');
    component.complexForm.controls['lastName'].setValue('name');
    component.complexForm.controls['gender'].setValue('male');
    component.complexForm.controls['dob'].setValue('1996-10-27');
    component.complexForm.controls['mobile'].setValue('8870783265');
    component.complexForm.controls['email'].setValue('saran@gmail.com');
    component.complexForm.controls['priority'].setValue('normal');
    component.complexForm.controls['description'].setValue('');
    component.complexForm.controls['fever'].setValue(true);
    component.complexForm.controls['ear'].setValue(false);
    component.complexForm.controls['heart'].setValue(true);
    expect(component.complexForm.valid).toBeTruthy();
    spyOn(component, 'submitForm').and.callThrough();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.nativeElement.querySelector('#submit-btn').click();
      fixture.detectChanges();
      expect(component.submitForm).toHaveBeenCalled();
      expect(component.list.length).toBe(1);
      expect(component.list[0].email).toBe('saran@gmail.com');
      expect(fixture.nativeElement.querySelector('#table-lastname').textContent.trim()).toBe('name');
      expect(fixture.nativeElement.querySelector('#table-condition').textContent.trim()).toBe('Chronic fever/unexpected weight loss,Heart problems');
      expect(fixture.nativeElement.querySelector('#table-description').textContent.trim()).toBe('----');
    });
  }));

  it('check current condition content in table(heart=true)', fakeAsync(() => {
    component.isFormEnabled = true;
    component.complexForm.controls['firstName'].setValue('patient');
    component.complexForm.controls['lastName'].setValue('name');
    component.complexForm.controls['gender'].setValue('male');
    component.complexForm.controls['dob'].setValue('1996-10-27');
    component.complexForm.controls['mobile'].setValue('8870783265');
    component.complexForm.controls['email'].setValue('saran@gmail.com');
    component.complexForm.controls['priority'].setValue('normal');
    component.complexForm.controls['description'].setValue('');
    component.complexForm.controls['fever'].setValue(false);
    component.complexForm.controls['ear'].setValue(false);
    component.complexForm.controls['heart'].setValue(true);
    expect(component.complexForm.valid).toBeTruthy();
    spyOn(component, 'submitForm').and.callThrough();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.nativeElement.querySelector('#submit-btn').click();
      fixture.detectChanges();
      expect(component.submitForm).toHaveBeenCalled();
      expect(component.list.length).toBe(1);
      expect(component.list[0].email).toBe('saran@gmail.com');
      expect(fixture.nativeElement.querySelector('#table-lastname').textContent.trim()).toBe('name');
      expect(fixture.nativeElement.querySelector('#table-condition').textContent.trim()).toBe('Heart problems');
      expect(fixture.nativeElement.querySelector('#table-description').textContent.trim()).toBe('----');
    });
  }));


  it('check current condition content in table(heart=true) for edit', fakeAsync(() => {
    component.isFormEnabled = true;
    component.complexForm.controls['firstName'].setValue('patient');
    component.complexForm.controls['lastName'].setValue('name');
    component.complexForm.controls['gender'].setValue('male');
    component.complexForm.controls['dob'].setValue('1996-10-27');
    component.complexForm.controls['mobile'].setValue('8870783265');
    component.complexForm.controls['email'].setValue('saran@gmail.com');
    component.complexForm.controls['priority'].setValue('normal');
    component.complexForm.controls['description'].setValue('');
    component.complexForm.controls['fever'].setValue(false);
    component.complexForm.controls['ear'].setValue(false);
    component.complexForm.controls['heart'].setValue(false);
    expect(component.complexForm.valid).toBeTruthy();
    spyOn(component, 'submitForm').and.callThrough();
    spyOn(component, 'edit').and.callThrough();
    tick();
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      fixture.nativeElement.querySelector('#submit-btn').click();
      fixture.detectChanges();
      expect(component.submitForm).toHaveBeenCalled();
      expect(component.list.length).toBe(1);
      expect(component.list[0].lastName).toBe('name');
      expect(fixture.nativeElement.querySelector('#table-lastname').textContent.trim()).toBe('name');

      fixture.nativeElement.querySelector('#user-edit').click();
      fixture.detectChanges();
      expect(component.edit).toHaveBeenCalled();
      expect(component.isFormEnabled).toBe(true);
      expect(component.isSubmit).toBe(false);
      expect(component.index).toBe(0);
      addUser = fixture.nativeElement.querySelector('#form-container');
      expect(addUser).toBeTruthy();

      component.complexForm.controls['firstName'].setValue('patient');
      component.complexForm.controls['lastName'].setValue('name');
      component.complexForm.controls['gender'].setValue('male');
      component.complexForm.controls['dob'].setValue('1996-10-27');
      component.complexForm.controls['mobile'].setValue('8870783265');
      component.complexForm.controls['email'].setValue('saran@gmail.com');
      component.complexForm.controls['priority'].setValue('normal');
      component.complexForm.controls['description'].setValue('');
      component.complexForm.controls['fever'].setValue(false);
      component.complexForm.controls['ear'].setValue(false);
      component.complexForm.controls['heart'].setValue(true);
      expect(component.complexForm.valid).toBeTruthy();
      fixture.detectChanges();
      fixture.nativeElement.querySelector('#submit-btn').click();
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelector('#table-condition').textContent.trim()).toBe('Heart problems');
    });
  }));


});



