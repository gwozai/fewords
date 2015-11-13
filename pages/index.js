
var Vue = require('vue')

new Vue({
    el: 'body',
    components: {
        'talkbox': require('../modules/talkbox/talkbox'),
        'talklist': require('../modules/talklist/talklist')
    }
})




