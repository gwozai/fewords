var store = require('../store/store')
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
            console.log(this.content)
            var data = store.get()
            data.unshift({
                id : Math.random(),
                content : this.content,
                timestamp : Date.now()
            })
            store.save(data)
            this.content = ''
        }
    }
})
