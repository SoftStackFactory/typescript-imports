const { result } = require('../challenge-two/index')
const genericTests = require('../.spec/generic');

genericTests.exportValueEquals(result, 30)