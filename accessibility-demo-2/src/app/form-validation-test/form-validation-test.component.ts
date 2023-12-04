import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { DropdownExampleComponent } from '../dropdown-example/dropdown-example.component';
import { Router } from '@angular/router';

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
    DropdownExampleComponent,
  ],
})
export class FormValidationTestComponent {
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

  constructor(public router: Router) {}

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

  toggleSidePanel(drawer: MatDrawer, drawerButton: HTMLButtonElement) {
    drawer.toggle();
    if (drawer.opened) {
      drawerButton.focus();
      setTimeout(() => {
        drawerButton.focus();
      }, 100);
    }
  }

  closeSidePanel(drawer: MatDrawer, toggleSidePanelButton: HTMLButtonElement) {
    drawer.close();
    toggleSidePanelButton.focus();
  }
}
