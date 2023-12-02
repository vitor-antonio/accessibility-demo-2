import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-validation-test',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './form-validation-test.component.html',
  styleUrl: './form-validation-test.component.scss',
})
export class FormValidationTestComponent {
  myForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      //forbiddenNameValidator(/bob/i) // <-- Here's how you pass in the custom validator.
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  required: any;

  constructor(private fb: FormBuilder) {
    // this.myForm = this.fb.group({
    //   name: ['', [Validators.required]],
    //   email: ['', [Validators.required, Validators.email]],
    // });
  }

  submitForm() {
    // Handle form submission
  }

  public get name() {
    return this.myForm.get('name');
  }
  public get email() {
    return this.myForm.get('email');
  }
}
