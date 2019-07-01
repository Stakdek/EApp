const { app, BrowserWindow, ipcMain } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
    // Create the browser window.
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        },
        show: false,
        backgroundColor: '#dddddd',
        autoHideMenuBar: true,
        textAreasAreResizable: false,
        // kiosk: true,
    })

    // and load the index.html of the app.
    win.loadFile('index.html')

    // Open the DevTools.
    win.webContents.openDevTools()

    // Emitted when the content has finished rendering
    win.on('ready-to-show', () => {
        win.show();
    })

    // Emitted when the window is closed.
    win.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        win = null
    })

    // Warning if the window becomes unresponsive
    win.on('unresponsive', () => {
        console.log('UNRESPONSIVE')
    })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Example using a child process.

const child_process = require('child_process')
// Keep track of the child globally
let workspace_proc

function proc_launch_workspace() {
    workspace_proc = child_process.exec(
        'pidgin & disown')
    workspace_proc.stdout.on('data', (data) => {
        console.log('stdout: ' + data)
    })
    workspace_proc.stderr.on('data', (data) => {
        console.log('stderr: ' + data)
    })
    workspace_proc.on('close', (code) => {
        console.log('close with code ' + code)
        workspace_proc = null
    })
    console.log('pid: ' + workspace_proc.pid)
    workspace_proc = child_process.exec(
        'pidgin & disown')
    workspace_proc.stdout.on('data', (data) => {
        console.log('stdout: ' + data)
    })
    workspace_proc.stderr.on('data', (data) => {
        console.log('stderr: ' + data)
    })
    workspace_proc.on('close', (code) => {
        console.log('close with code ' + code)
        workspace_proc = null
    })
    console.log('pid: ' + workspace_proc.pid)



    workspace_proc = child_process.exec(
        'thunderbird & disown')
    workspace_proc.stdout.on('data', (data) => {
        console.log('stdout: ' + data)
    })
    workspace_proc.stderr.on('data', (data) => {
        console.log('stderr: ' + data)
    })
    workspace_proc.on('close', (code) => {
        console.log('close with code ' + code)
        workspace_proc = null
    })
    console.log('pid: ' + workspace_proc.pid)






    workspace_proc = child_process.exec(
        'opera & disown')
    workspace_proc.stdout.on('data', (data) => {
        console.log('stdout: ' + data)
    })
    workspace_proc.stderr.on('data', (data) => {
        console.log('stderr: ' + data)
    })
    workspace_proc.on('close', (code) => {
        console.log('close with code ' + code)
        workspace_proc = null
    })
    console.log('pid: ' + workspace_proc.pid)
}

ipcMain.on('launch-workspace', (event, arg) => {
    if (workspace_proc) {
        console.log('process already running: ' + workspace_proc.pid)
    } else {
        console.log('launching workspace process')
        proc_launch_workspace()
    }
})
