export class Bridge {
  private browserWindow: BrowserWindow = window as any;
  private versions: AppVersions = this.browserWindow.versions;
  private events: AppEvents = this.browserWindow.events;

  constructor() {
  }

  getChromeVersion(): string {
    return this.versions.chrome;
  }

  getAppVersion(): string {
    return this.versions.app;
  }

  getElectronVersion(): string {
    return this.versions.electron;
  }

  getNodeVersion(): string {
    return this.versions.node;
  }

  async saveToStorage(data: any): Promise<AppStorageEventsResponse> {
    const response = await this.events.saveToStorage(data);
    return response;
  }

  async getFromStorage(data: any): Promise<AppStorageEventsResponse> {
    const response = await this.events.getFromStorage(data);
    return response;
  }

  saveToStorageOnClose(callback: Function): Function {
    return this.events.saveToStorageOnClose(callback);
  }

  closeApp(): void {
    this.events.closeApp();
  }
}

interface BrowserWindow {
  versions: AppVersions;
  events: AppEvents;
}

interface AppVersions {
  node: string;
  chrome: string;
  electron: string;
  app: string;
}

interface AppEvents {
  teste: Function;
  saveToStorage: Function;
  getFromStorage: Function;
  saveToStorageOnClose: Function;
  closeApp: Function;
}

interface AppStorageEventsResponse {
  success: boolean;
  storageData: any;
  savedTo: string;
}

export interface AppWindowActions {
  /**
   * Closes application when called as a function;
   */
  close: Function;
}
