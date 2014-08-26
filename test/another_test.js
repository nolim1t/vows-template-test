var vows = require('vows'), assert = require('assert');

vows.describe('Another test to demonstrate separation').addBatch({
    'Subtraction functionality': {
        topic: function() { return 2-1 },
        'works properly': function(topic) {
            assert.equal(topic, 1);
        }
    }
}).export(module);

