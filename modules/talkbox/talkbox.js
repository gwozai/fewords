var Guid = require('guid')
var Vue = require('vue')

function randomColor(a) {
    var r =  Math.floor((Math.random()* 255))
    var g =  Math.floor((Math.random()* 255))
    var b =  Math.floor((Math.random()* 255))
    return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')'
}

module.exports = Vue.extend({
    template : __inline('./talkbox.html'),
    data : function() {
        return {
            content : ''
        }
    },
    methods : {
        submit: function() {
            if(!this.content.trim()) {
                this.$els.textarea.focus()
                return false
            }

            this.$root.$broadcast('add', {
                id : Guid.create().toString(),
                content : this.content,
                timestamp : Date.now(),
                color: randomColor(0.2)
            })
            this.content = ''
        }
    }
})
