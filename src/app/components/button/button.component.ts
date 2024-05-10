import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @ViewChild('icon') iconRef: ElementRef | undefined;
  @ViewChild('label') labelRef: ElementRef | undefined;

  @Input() customClass: string = "";
  @Input() type: string = "button";
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  @Input() mx: string = "1";
  @Input() bootstrapClass = "btn btn-light"

  constructor(public changeDetector: ChangeDetectorRef) {
  }

  ngAfterContentChecked(): void {
    this.changeDetector.detectChanges();
  }

  get btnClass(): string {
    return [
      this.bootstrapClass, 'mx-' + this.mx,
      this.customClass
    ].join(' ');
  }

  get iconStyle(): Object {
    return {'padding-right': this.hasLabel ? '10px': '0'}
  }

  get hasIcon(): boolean {
    return this.iconRef?.nativeElement.firstChild != null;
  }

  get hasLabel(): boolean {
    return this.labelRef?.nativeElement.firstChild != null;
  }
}
