var Vue = require('vue')
var marked = require('marked')
var moment = require('moment')
var emoji = require('node-emoji')
const MIN_HEIGHT = 32

module.exports = Vue.extend({
    template: __inline('./talk.html'),
    props: ["content", "id", "timestamp", "star", "color"],
    data: function () {
        return {
            isEdit: false,
            contentHeight: MIN_HEIGHT
        }
    },
    filters: {
        marked: marked,
        emoji:  function(value) {
          return emoji.emojify(value)
        },
        moment: function (time) {
            moment.locale('zh-cn')
            return moment(time).fromNow()
        }
    },
    methods: {
        toggleStar: function () {
            this.star = !this.star
            this.$dispatch('star', this.id)
        },
        edit: function () {
            var h = this.$els.content.parentNode.clientHeight - this.$els.toolbar.clientHeight
            this.contentHeight = Math.max(h, MIN_HEIGHT)
            this.isEdit = true
            var self = this
            Vue.nextTick(function () {
                var t = self.$els.textarea
                t.selectionStart = self.content.length
                t.selectionEnd = self.content.length
                t.focus()
            })
        },
        delete: function () {
            this.$dispatch('delete', this.id)
        },
        save: function () {
            console.log('save')
            this.isEdit = false
            this.$dispatch('save', this.id)
        }
    }
})
