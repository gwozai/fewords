var app = require('app')
var mainWindow = null
var BrowserWindow = require('browser-window')

app.on('window-all-closed', function() {
    app.quit()
})

app.on('ready', function() {
    console.log('ready')
    mainWindow = new BrowserWindow({
        width: 500,
        height: 600,
        //frame : false,
        resizeable : false
    })


    mainWindow.loadUrl('file://' + __dirname + '/pages/index.html')

    mainWindow.openDevTools()

    mainWindow.on('closed', function() {
        mainWindow = null
    })
})
