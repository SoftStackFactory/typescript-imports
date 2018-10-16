const { result } = require('../filepath-challenge-03/index')
const genericTests = require('../.spec/generic.spec');



genericTests.exportValueEquals(result, 2048)