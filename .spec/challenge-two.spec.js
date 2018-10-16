const { result } = require('../challenge-two/index')
const genericTests = require('../.spec/generic.spec');

genericTests.exportValueEquals(result, 30)