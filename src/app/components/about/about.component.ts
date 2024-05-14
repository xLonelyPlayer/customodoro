import { Component } from '@angular/core';
import { BridgeService } from '../../models/bridge/bridge.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {

  constructor(
    public bridge: BridgeService, // FIXME It is set to public only to be used temporarily on template for debug pourpose. Can be removed in the future.
  ) {
  }

  ngOnInit() {
  }

}
