import { Injectable } from "@angular/core";

@Injectable()
export class Storage {

  constructor() {
  }

  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem(key: string, parse: boolean = true): any {
    if (!this.hasKey(key)) {
      return;
    }

    const storage = localStorage.getItem(key);

    return parse && storage ? JSON.parse(storage) : storage;
  }

  private hasKey(key: string): boolean {
    return localStorage.hasOwnProperty(key);
  }

}
