import { Injectable } from "@angular/core";
import { Bridge } from './../bridge/bridge';

@Injectable()
export class Window {

  constructor(private bridge: Bridge) {
  }

  close(): void {
    this.bridge.closeApp();
  }

}
