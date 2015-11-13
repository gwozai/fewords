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
                this.$els.textarea.focus()
                return false
            }

            this.$root.$broadcast('add', {
                id : Guid.create(),
                content : this.content,
                timestamp : Date.now()
            })
            this.content = ''
        }
    }
})
