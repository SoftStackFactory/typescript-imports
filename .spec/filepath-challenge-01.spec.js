const { result } = require('../filepath-challenge-01/index')
const genericTests = require('../.spec/generic');



genericTests.exportValueEquals(result, 512)