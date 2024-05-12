const { ipcRenderer, contextBridge } = require('electron')

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
  teste: () => {
    console.log('aoba');
    return ipcRenderer.invoke("teste");
  },
}

contextBridge.exposeInMainWorld( 'events', EVENTS );
contextBridge.exposeInMainWorld( 'api', WINDOW_API );
contextBridge.exposeInMainWorld( 'versions', VERSIONS );
