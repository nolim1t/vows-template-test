var vows = require('vows'), assert = require('assert');

vows.describe('Javascript tests').addBatch({
    'Addition functionality': {
        topic: function() { return 1+1 },
        'works properly': function(topic) {
            assert.equal(topic, 2);
        }
    }
}).export(module);

