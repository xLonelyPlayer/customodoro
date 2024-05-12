export class Bridge {
  private browserWindows: BrowserWindow = window as any;
  private versions: AppVersions = this.browserWindows.versions;

  constructor() {
  }

  getChromeVersion() {
    return this.versions.chrome() as string;
  }

  getAppVersion() {
    return this.versions.appVersion;
  }

  getElectronVersion() {
    return this.versions.electron();
  }

  getNodeVersion() {
    return this.versions.node();
  }
}

interface BrowserWindow {
  versions: AppVersions
}

interface AppVersions {
  node: () => {},
  chrome: () => {},
  electron: () => {},
  appVersion: string,
}
