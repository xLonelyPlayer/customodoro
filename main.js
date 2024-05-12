const { app, BrowserWindow } = require('electron')
const path = require('node:path')

app.setAppUserModelId('Customodoro');

let win;

if (!app.isPackaged) {
    require('electron-reload')(__dirname);
}

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 800,
    height: 600,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/customodoro/browser/assets/logo.png`,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      backgroundThrottling : false,
    },
    alwaysOnTop: true,
    frame: false,
    titleBarStyle: 'hidden',
    titleBarOverlay: {
      color: '#00000000',
      symbolColor: '#000000'
    },
    thickFrame: true,
  })

  win.setMenu(null);

  if (!app.isPackaged) {
    console.log("DEVELOPMENT MODE")
    win.loadURL(`http://localhost:4200/`)
  } else {
    win.loadURL(`file://${__dirname}/dist/customodoro/browser/index.html`)
  }


  //// uncomment below to open the DevTools.
  if (!app.isPackaged) {
    win.webContents.openDevTools()
  }

  // Event when the window is closed.
  win.on('closed', function () {
    win = null
  })
}

// Create window on electron intialization
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {

  // On macOS specific close process
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // macOS specific close process
  if (win === null) {
    createWindow()
  }
})
