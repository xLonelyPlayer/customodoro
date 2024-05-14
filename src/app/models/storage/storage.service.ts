import { Injectable } from "@angular/core";
import { BridgeService } from "../bridge/bridge.service";

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private bridge: BridgeService) {
  }

  set(key: string, value: any) {
    this.bridge.saveToStorage({key, value});
  }

  get(key: string) {
    return this.bridge.getFromStorage({ key });
  }

}
