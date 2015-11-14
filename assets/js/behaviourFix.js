;(function () {
    //解决electron链接跳转问题
    var open = require('open')
    document.addEventListener('click', function (e) {
        e.preventDefault()
        e.stopPropagation()
        if (e.target.nodeName.toLowerCase() == 'a' && e.target.href) {
            if (e.target.protocol != 'file:') {
                open(e.target.href)
            }
        }
        return false
    })

	//阻止刷新
    document.addEventListener('keydown', function (e) {
        if (e.metaKey && (e.keyCode == 82)) {
            e.preventDefault()
            return false
        }
    })
}())
