
genericTests = {

  exportValueEquals: function(statement, result) {
    test(`The value should be ${result}`, () => {
      expect(statement).toBe(result)
    })
  }
}

module.exports = genericTests;