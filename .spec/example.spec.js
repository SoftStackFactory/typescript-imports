const {val} = require('../example-import/index')
const genericTests = require('../.spec/generic');

genericTests.exportValueEquals(val, 'Hello')

