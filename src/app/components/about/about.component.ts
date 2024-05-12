import { Component } from '@angular/core';
import { Bridge } from '../../models/bridge/bridge';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(public bridge: Bridge) {
  }

}
