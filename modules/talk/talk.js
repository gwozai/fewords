var Vue = require('vue')
var marked = require('marked')
var store = require('../store/store')

module.exports = Vue.extend({
    template : __inline('./talk.html'),
    props : ["content", "id", "timestamp"],
    data : function() {
        return {
            isEdit : false
        }
    },
    filters : {
        marked : marked
    },
    methods : {
        edit : function() {
            console.log('edit')
            this.isEdit = true
        },
        delete : function() {
            console.log(this.$data)
            this.$dispatch('delete', this.id)
        },
        save : function() {
            console.log('save')
            this.isEdit = false
        }
    }
})
