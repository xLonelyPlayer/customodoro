export class Bridge {
  private browserWindows: BrowserWindow = window as any;
  private versions: AppVersions = this.browserWindows.versions;

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
}

interface BrowserWindow {
  versions: AppVersions
}

interface AppVersions {
  node: string,
  chrome: string,
  electron: string,
  app: string,
}
