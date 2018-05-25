const maths = require('./maths.js')

describe('maths.add', () => {
  describe('when given 2 numbers', () => {
    it('returns the total', () => {
      expect(maths.add(1, 2)).toBe(3)
    })
  })
})

describe('maths.sub', () => {
  describe('when given 2 numbers', () => {
    it('returns expected subtraction', () => {
      expect(maths.sub(3, 1)).toBe(2)
    })
  })
})

describe('maths.mul', () => {
  describe('when given 2 numbers', () => {
    it('returns them multiplied', () => {
      expect(maths.mul(2, 3)).toBe(6)
    })
  })
})

describe('maths.sum', () => {
  describe('when given 2 numbers', () => {
    it('returns the sum of the 2', () => {
      expect(maths.sum(2, 3)).toBe(5)
    })
  })

  describe('when given 4 numbers', () => {
    it('returns the sum of the 4 numbers', () => {
      expect(maths.sum(1, 2, 3, 4)).toBe(10)
    })
  })
})