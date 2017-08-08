import removeFalsy from '../'

describe('removeFalsy', () => {
  it('removes falsy values from arrays', () => {
    expect(removeFalsy([1, 2, 3, null, 4])).toEqual([1, 2, 3, 4])
    expect(removeFalsy([1, 2, 3, undefined, 4])).toEqual([1, 2, 3, 4])
    expect(removeFalsy([1, 2, 3, false, 4])).toEqual([1, 2, 3, 4])
  })

  it('returns the argument if it is not an array', () => {
    expect(removeFalsy('test')).toBe('test')
  })
})
