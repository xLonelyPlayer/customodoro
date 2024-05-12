const { ipcRenderer, contextBridge } = require("electron");

const VERSIONS = {
  chrome: process.versions.chrome,
  node: process.version.node,
  electron: process.version.node,
  app: "beta-0.0.1",
}

const WINDOW_API = {
  getSize: () => ipcRenderer.invoke("get/window/size"),
}

const EVENTS = {
  saveToStorage: (data) => ipcRenderer.invoke("saveToStorage", data),
  getFromStorage: (data) => ipcRenderer.invoke("getFromStorage", data),
  saveToStorageOnClose: (callback) => ipcRenderer.on("saveToStorageOnClose", (_event, value) => callback(value)),
  closeApp: () => ipcRenderer.invoke("closeApp"),
}

contextBridge.exposeInMainWorld( "events", EVENTS );
contextBridge.exposeInMainWorld( "api", WINDOW_API );
contextBridge.exposeInMainWorld( "versions", VERSIONS );
