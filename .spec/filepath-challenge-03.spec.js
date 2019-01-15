const { result } = require('../filepath-challenge-03/main/index')
const genericTests = require('../.spec/generic');



genericTests.exportValueEquals(result, 2048)