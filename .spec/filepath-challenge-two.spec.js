const { result } = require('../filepath-challenge-two/index')
const genericTests = require('../.spec/generic.spec');



genericTests.exportValueEquals(result, 2048)