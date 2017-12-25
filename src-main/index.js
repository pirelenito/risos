const { app, BrowserWindow } = require('electron')
const url = require('url')

const appPath = url.format({
  pathname: 'localhost:3000/index.html',
  protocol: 'http:',
  slashes: true,
})

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 1024,
    height: 768,
  })

  // and load the index.html of the app.
  win.loadURL(appPath)

  // Open the DevTools.
  if (process.env.NODE_ENV === 'development') {
    win.webContents.openDevTools()
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
    process.exit(0)
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  if (!win) {
    createWindow()
  }
})

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  app.quit()
})
