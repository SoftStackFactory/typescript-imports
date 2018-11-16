const { greeting } = require('../challenge-one/index')
const genericTests = require('../.spec/generic');

genericTests.exportValueEquals(greeting, 'hello world')