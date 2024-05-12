const { app, BrowserWindow, ipcMain, ipcRenderer } = require("electron");
const path = require("node:path");
const { getWinSettings, saveBounds } = require("./settings");

app.setAppUserModelId("Customodoro");

let window;

const isDev = !app.isPackaged;
if (isDev) {
    console.log("DEVELOPMENT MODE");
    require('electron-reload')(__dirname);
}

function createWindow () {

  const bounds = getWinSettings();
  if (isDev) {
    console.log(`APP BOUNDS [${bounds[0]}]x[${bounds[1]}]`);
  }

  window = new BrowserWindow({
    width: bounds[0], height: bounds[1],
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

  window.setMenu(null);

  window.on("resized", () => saveBounds(window.getSize()));

  if (isDev) {
    window.loadURL(`http://localhost:4200/`)
  } else {
    window.loadURL(`file://${__dirname}/dist/customodoro/browser/index.html`)
  }

  if (isDev) {
    window.webContents.openDevTools()
  }

  window.on("closed", function () {
    window = null
  })
}

app.on("ready", () => {
  ipcMain.handle("teste", () => "testado");
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
