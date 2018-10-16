const { person } = require('../challenge-three/person')
const { salutations } = require('../challenge-three/index')
const genericTests = require('../.spec/generic.spec');

genericTests.exportValueEquals(salutations, 'Nice to meet you, John')