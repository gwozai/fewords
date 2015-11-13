var app = require('app')
var mainWindow = null
var BrowserWindow = require('browser-window')

app.on('window-all-closed', function() {
    app.quit()
})

app.on('ready', function() {
    console.log('ready')
    mainWindow = new BrowserWindow({
        "width": 500,
        "height": 600,
        "min-width" : 300,
        "min-height" : 400,
        "skip-taskbar" : true,
        //frame : false,
        "center" : true,
        "title-bar-style": 'hidden-inset'
    })


    mainWindow.loadUrl('file://' + __dirname + '/pages/index.html')

    mainWindow.openDevTools()

    mainWindow.on('closed', function() {
        mainWindow = null
    })
})
