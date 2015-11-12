var Vue = require('vue')
var store = require('../store/store')


module.exports = Vue.extend({
    template : __inline('./talklist.html'),
    data : function() {
        return {
            items: store.get()
        }
    },
    components : {
        talk : require('../talk/talk')
    },
    events : {
        delete : function(id) {
            var self = this
            this.items.forEach(function(item) {
                if(item.id == id)
                self.items.$remove(item)
            })
            store.save(self.items)
        }
    }
})
