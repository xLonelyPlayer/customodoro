import { Injectable } from "@angular/core";
import { Bridge } from "../bridge/bridge";

@Injectable()
export class Storage {


  constructor(private bridge: Bridge) {
  }

  set(key: string, value: any) {
    this.bridge.saveToStorage({key, value});
  }

  /**
   *
   * @param key
   * @returns AppEventsResponse
   */
  get(key: string) {
    return this.bridge.getFromStorage({ key });
  }

}
