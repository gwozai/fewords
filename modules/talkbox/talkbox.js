var store = require('../store/store')
var Guid = require('guid')
var Vue = require('vue')

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
                return false
            }
            var data = store.get()
            data.unshift({
                id : Guid.create(),
                content : this.content,
                timestamp : Date.now()
            })
            store.save(data)
            this.content = ''
        }
    }
})
