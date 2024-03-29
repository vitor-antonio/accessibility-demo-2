import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RadioButtonsTestComponent } from '../radio-buttons-test/radio-buttons-test.component';

@Component({
  selector: 'app-accessibility-test',
  standalone: true,
  templateUrl: './accessibility-test.component.html',
  styleUrl: './accessibility-test.component.scss',
  imports: [CommonModule, RadioButtonsTestComponent],
})
export class AccessibilityTestComponent {
  @ViewChild('accessibleDialog') accessibleDialog: ElementRef | undefined;
  isShowingModal = false;

  radioOptions = [
    { value: 'pizza', label: 'Pizza' },
    { value: 'sushi', label: 'Sushi' },
    { value: 'burger', label: 'Burger' },
  ];

  selectedOption = '';

  constructor() {}

  showDogLoveMessage() {
    alert('We love dogs!');
  }

  openDialog() {
    this.isShowingModal = true;
    console.log('Opening dialog');
    setTimeout(() => {
      this.accessibleDialog?.nativeElement.show();
      //this.accessibleDialog?.nativeElement.showModal();
    }, 100);
  }

  closeDialog() {
    this.isShowingModal = false;
    this.accessibleDialog?.nativeElement.close();
    console.log('Closing dialog');
  }

  onOptionChanged(value: string): void {
    this.selectedOption = value;
  }
}
