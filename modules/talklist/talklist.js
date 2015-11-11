var Vue = require('vue')
var marked = require('marked')
var store = require('../store/store')


module.exports = Vue.extend({
    template : __inline('./talklist.html'),
    data : function() {
        return {
            items: store.get()
        }
    },
    filters : {
        marked : marked
    }
})
