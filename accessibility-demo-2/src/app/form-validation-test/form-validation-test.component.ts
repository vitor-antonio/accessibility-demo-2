import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { DropdownExampleComponent } from "../dropdown-example/dropdown-example.component";

@Component({
    selector: 'app-form-validation-test',
    standalone: true,
    templateUrl: './form-validation-test.component.html',
    styleUrl: './form-validation-test.component.scss',
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatSidenavModule,
        DropdownExampleComponent
    ]
})
export class FormValidationTestComponent {
  @ViewChild('sidePanelContent') sidePanelContent: ElementRef | undefined;
  showFiller = false;
  loading = false;
  sidePanelVisible = true;
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    password: new FormControl('', [
      Validators.required, // Password is required
      Validators.minLength(8), // Minimum length of 8 characters
      Validators.pattern(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/
      ), // Must contain at least one uppercase letter, one lowercase letter, one number, and one special character
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  get name() {
    return this.myForm.get('name');
  }
  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  required: any;
  progress = 0;

  constructor() {}

  submitForm() {
    // Handle form submission
  }

  simulateProgress() {
    this.progress = 0;
    const interval = setInterval(() => {
      this.loading = true;
      this.progress += 10;
      if (this.progress === 100) {
        clearInterval(interval);
        this.loading = false;
      }
    }, 800);

    // setTimeout(() => {
    //   this.loading = false;
    // }, 3000);
  }

  toggleSidePanel() {
    if (!this.sidePanelContent) return;

    this.sidePanelVisible = !this.sidePanelVisible;
    console.log(this.sidePanelVisible);

    if (this.sidePanelVisible) {
      this.sidePanelContent.nativeElement.inert = true;
    } else {
      this.sidePanelContent.nativeElement.inert = false;
    }
  }
}
