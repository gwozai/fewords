var app = require('app')
var BrowserWindow = require('browser-window')
var Tray = require('tray')
var ipc = require('ipc')

app.dock.hide()

app.on('window-all-closed', function () {
    app.quit()
})

var win = null
var tray = null
app.on('ready', function () {
    win = new BrowserWindow({
        "width": 500,
        "height": 600,
        "min-width": 300,
        "min-height": 400,
        "frame": false,
        "resizable": false,
        "show": false
    })

    win.loadUrl('file://' + app.getAppPath() + '/pages/index.html')

    tray = new Tray(app.getAppPath() + '/assets/images/ebook.png')
    tray.on('clicked', function (e, bound) {
        if (win.isVisible()) {
            win.hide()
        } else {
            var x = bound.x + bound.width / 2 - win.getBounds().width / 2
            var y = bound.y + bound.height - 1
            win.setPosition(x, y)
            win.show()
        }
    })

    //win.openDevTools()

    win.on('blur', function () {
        win.hide()
    })

    win.on('closed', function () {
        win = null
    })

    ipc.on('quit', function() {
        win.close()
        app.quit()
    })
})


