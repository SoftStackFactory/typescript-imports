const { result } = require('../filepath-challenge-02/index')
const genericTests = require('../.spec/generic.spec');



genericTests.exportValueEquals(result, 1024)