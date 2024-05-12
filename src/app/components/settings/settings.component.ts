import { Component } from '@angular/core';
import { Bridge } from '../../models/bridge/bridge';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss'
})
export class SettingsComponent {

  constructor(public bridge: Bridge) {
  }

  handleOnTestButton(event: Event) {
    console.log('teste');
    this.bridge.testeEvento();
  }
}
