const { result } = require('../filepath-challenge-one/index')
const genericTests = require('../.spec/generic.spec');



genericTests.exportValueEquals(result, 512)