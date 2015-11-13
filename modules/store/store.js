var path = require('path')
var mkdirp = require('mkdirp')
var userHomePath = process.env.HOME || process.env.USERPROFILE
var dataPath = path.join(userHomePath, '/Documents/fewords/talklist.json')
var fs = require('fs')

var data = null

console.log(dataPath)
if(!fs.existsSync(dataPath)) {
    mkdirp.sync(path.dirname(dataPath))
	fs.writeFileSync(dataPath, '[]', {mode: 511})
    console.log('创建成功')
}


module.exports = {
    get : function() {
        if(!data) {
            var d = fs.readFileSync(dataPath)
            console.log(d)
			data = JSON.parse(d)
        }
        return data
    },
    save : function(d) {
        if(!Array.isArray(d)) {
            console.error('保存的数据不合法')
            return false
        }
        if(!d.length) {
            d = []
        }
		data = d
        var body = JSON.stringify(data)
		fs.writeFile(dataPath, body, {mode : 511}, function(err) {
			if(err) return console.error(err)
			console.log('保存成功')
		})
    }
}
