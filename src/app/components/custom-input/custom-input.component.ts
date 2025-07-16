import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-custom-input',
  imports: [InputTextModule, ReactiveFormsModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
})
export class CustomInputComponent {
  @Input() control!: FormControl;
  @Input() type!: string;
  @Input() label!: string;
}
