import { Component } from '@angular/core';
import { Bridge } from '../../models/bridge/bridge';
import { Window } from '../../models/window/window';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(
    public bridge: Bridge, // FIXME It is set to public only to be used temporarily on template for debug pourpose. Can be removed in the future.
    private window: Window,
  ) {
  }

  ngOnInit() {
  }

}
