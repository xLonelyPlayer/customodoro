const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld('versions', {
  node: () => nodeVersion(),
  chrome: () => chromeVersion(),
  electron: () => electronVersion(),
  appVersion: "beta-0.0.1"
  // we can also expose variables, not just functions
})

const chromeVersion = () => {
  return process.versions.chrome;
}

const nodeVersion = () => {
  return process.version.node;
}

const electronVersion = () => {
  return process.version.electron;
}
