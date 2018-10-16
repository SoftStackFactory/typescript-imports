const {val} = require('../example-import/index')
const genericTests = require('../.spec/generic.spec');

genericTests.exportValueEquals(val, 'Hello')

