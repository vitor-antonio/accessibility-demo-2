import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-radio-buttons-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio-buttons-test.component.html',
  styleUrl: './radio-buttons-test.component.scss'
})
export class RadioButtonsTestComponent {
  @Input() options: { value: string, label: string }[] = [];
  @Output() optionChanged = new EventEmitter<string>();

  selectedOption: string = '';

  onOptionChange(value: string): void {
    this.selectedOption = value;
    this.optionChanged.emit(value);
  }
}
