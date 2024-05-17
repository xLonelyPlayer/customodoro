import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-slider-list',
  templateUrl: './slider-list.component.html',
  styleUrl: './slider-list.component.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SliderListComponent),
      multi: true,
    },
  ],
})
export class SliderListComponent implements ControlValueAccessor {
  controller = new FormControl('');

  private onChange: any;
  private onTouch: any;

  @Input() sliderList: Array<any> = [];
  @Input() sliderForm: FormGroup = new FormGroup({});

  writeValue(value: any): void {
    this.controller.setValue(value, { emitEvent: false });
  }

  registerOnChange(fn: (value: any) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (_: any) => void): void {
    this.onTouch = fn;
  }

  changeValue() {
    const { value } = this.controller;
    this.onChange(value);
  }
}
