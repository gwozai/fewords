require('./talkbox.scss')

var Vue = require('vue')

module.exports = Vue.extend({
    template : require('./talkbox.html'),
    data : function() {
        return {
            content : ''
        }
    },
    methods : {
        submit: function() {
            this.content = 'publish success'
        }
    }
})
