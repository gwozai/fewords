var Vue = require('vue')
var store = require('../store/store')


module.exports = Vue.extend({
    template : __inline('./talklist.html'),
    data : function() {
        return {
            items: store.get(),
            searchKey : '',
            searchOpend : false,
            onlyStar : false,
            now : -1
        }
    },
    components : {
        talk : require('../talk/talk')
    },
    methods : {
        search : function(key) {
            this.searchKey = key
        },
        toggleTimeSort : function() {
            this.now = -1 * this.now
        },
        toggleStarFilter : function() {
            this.onlyStar = !this.onlyStar
        },
        toggleSearch : function() {
            this.searchOpend = !this.searchOpend
            if(!this.searchOpend) {
                this.searchKey = ''
                this.$els.input.blur()
            } else {
                this.$els.input.focus()
            }
        }

    },
    filters : {
        starFilter : function(items) {
            if(this.onlyStar) {
                return items.filter(function(item) {
                    return item.star
                })
            } else {
                return items
            }

        }
    },
    events : {
        delete : function(id) {
            var self = this
            this.items.forEach(function(item) {
                if(item.id == id)
                self.items.$remove(item)
            })
            store.save(self.items)
        },
        save : function() {
            store.save(this.items)
        },
        star : function() {
            store.save(this.items)
        },
        add : function(data) {
            console.log(data)
            this.items.unshift(data)
            store.save(this.items)
        }
    }
})
