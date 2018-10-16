const { result } = require('../filepath-challenge-one/index')
const { double } = require('../filepath-challenge-one/double')
const genericTests = require('../.spec/generic.spec');



genericTests.exportValueEquals(result, 700)