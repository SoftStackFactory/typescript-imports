const { result } = require('../filepath-challenge-01/index')
const genericTests = require('../.spec/generic.spec');



genericTests.exportValueEquals(result, 512)