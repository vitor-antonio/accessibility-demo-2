import { Routes } from '@angular/router';
import { FormValidationTestComponent } from './form-validation-test/form-validation-test.component';
import { AccessibilityTestComponent } from './accessibility-test/accessibility-test.component';

export const routes: Routes = [
    { path: 'formValidationTest', component: FormValidationTestComponent },
    { path: '', component: AccessibilityTestComponent }
];
