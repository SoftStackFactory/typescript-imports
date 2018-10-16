const { greeting } = require('../challenge-one/index')
const genericTests = require('../.spec/generic.spec');

genericTests.exportValueEquals(greeting, 'hello world')