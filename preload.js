const { ipcRenderer, contextBridge, ipcMain } = require('electron')

const VERSIONS = {
  chrome: process.versions.chrome,
  node: process.version.node,
  electron: process.version.node,
  app: "beta-0.0.1",
}

const WINDOW_API = {
  getSize: () => ipcRenderer.invoke("get/window/size"),
}

contextBridge.exposeInMainWorld( 'versions', VERSIONS );
contextBridge.exposeInMainWorld( 'api', WINDOW_API );
