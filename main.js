const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("node:path");
const {
    setWindowConfig,
    saveWindowBounds,
    saveWindowPosition,
    saveToStorage,
    getFromStorage,
  } = require("./settings");

app.setAppUserModelId("Customodoro");

let window;
let status = 0;

const isDev = !app.isPackaged;
if (isDev) {
    console.log("DEVELOPMENT MODE");
    require("electron-reload")(__dirname);
}

function createWindow () {

  window = new BrowserWindow({
    backgroundColor: "#ffffff",
    icon: `file://${__dirname}/dist/customodoro/browser/assets/logo.png`,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      backgroundThrottling : false,
    },
    frame: false,
    titleBarStyle: "hidden",
    titleBarOverlay: {
      color: "#00000000",
      symbolColor: "#000000"
    },
    thickFrame: true,
  });

  setWindowConfig(window);

  window.setMenu(null);
  window.on("moved", () => {
    saveWindowPosition(window.getPosition());
  });
  window.on("resized", () => {
    saveWindowBounds(window.getSize());
  });

  if (isDev) {
    window.loadURL(`http://localhost:4200/`)
  } else {
    window.loadURL(`file://${__dirname}/dist/customodoro/browser/index.html`)
  }

  if (isDev) {
    window.webContents.openDevTools()
  }

  window.on("close", function (e) {
    if (status == 0 && window) {
      e.preventDefault();
      window.webContents.send("saveToStorageOnClose");
    }
  });

}


app.on("ready", () => {
  ipcMain.handle("teste", () => "testado");
  ipcMain.handle("saveToStorage", saveToStorage);
  ipcMain.handle("getFromStorage", getFromStorage);

  // FIXME Study to move this function from here if possible
  ipcMain.handle("closeApp", () => {
    status = 1;
    window = null;
    if (process.platform !== "darwin") {
        app.quit();
    }
  });

  createWindow();
});

app.on("window-all-closed", function () {

  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", function () {
  if (window === null) {
    createWindow()
  }
})
