import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'customodoro';
  opened: boolean = true;

  handleSidenavOpen(): void {
    return;
  }

  handleSidenavClosed(): void {
    return;
  }
}
