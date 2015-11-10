
var Vue = require('vue')
var app = new Vue({
    el: 'body',
    components: {
        'talkbox': require('../modules/talkbox/talkbox'),
        'talklist': require('../modules/talklist/talklist')
    }
})
