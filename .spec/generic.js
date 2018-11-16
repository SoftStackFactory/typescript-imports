
genericTests = {

  exportValueEquals: function(studentAnwser, expectedResult) {
    test(`The value should be ${expectedResult}`, () => {
      const msg = `The value you exporeted was ${studentAnwser}, but we are expecting ${expectedResult}`
      expect(studentAnwser, msg).toBe(expectedResult)
    })
  }
}

module.exports = genericTests;