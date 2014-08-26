vows = require 'vows'
assert = require 'assert'

coffeesuite = vows.describe("Coffeescript tests")

coffeesuite.addBatch({
    'Sample Addition Functionality': {
        topic: () -> return 1+1,
        'is working properly': (topic) -> assert.equal topic, 2
    }
})

coffeesuite.export(module)

