import {Component, Input} from '@angular/core';
import {AbstractControl, FormControl} from "@angular/forms";
import {InputType} from "./types";

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
  @Input() control!: any
  @Input() name: string = ''
  @Input() label: string = 'label'
  @Input() placeholder: string = ''
  @Input() type: InputType = 'text'

  constructor() {

  }

  get invalid(): boolean {
    return this.control.touched && this.control.invalid
  }

  get formControl(): FormControl {
    return this.control as FormControl
  }
}
