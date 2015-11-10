var Vue = require('vue')

module.exports = Vue.extend({
    template : require('./talklist.html'),
    data : function() {
        return {
            list: []
        }
    }
})
