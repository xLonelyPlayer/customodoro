import { Injectable } from "@angular/core";
import { BridgeService } from '../bridge/bridge.service';

@Injectable({
  providedIn: 'root'
})
export class WindowService {

  constructor(private bridge: BridgeService) {
  }

  close(): void {
    this.bridge.closeApp();
  }

}
