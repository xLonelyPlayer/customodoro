export class Bridge {
  private browserWindows: BrowserWindow = window as any;
  private versions: AppVersions = this.browserWindows.versions;
  private events: AppEvents = this.browserWindows.events;

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

  async testeEvento(): Promise<void> {
    const response = await this.events.teste();
    console.log(response)
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
}

interface AppStorageEventsResponse {
  success: boolean;
  storageData: any;
  savedTo: string;
}
