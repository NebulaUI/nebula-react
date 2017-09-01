import sortArray from '../'

describe('sortArray', () => {
  const input = [
    { id: 1, firstName: 'John', lastName: 'Smith', date: new Date('2014-10-01') },
    { id: 2, firstName: 'Jane', lastName: 'Doe', date: new Date('2013-10-01') },
    { id: 3, firstName: 'Alan', lastName: 'James', date: new Date('2011-10-01') }
  ]
  const sortHelper = (items, selector, desc) => sortArray(items, selector, desc).map(({ id }) => id)

  it('should sort the array by the key selected in the selector function', () => {
    expect(sortHelper(input, person => person.firstName)).toEqual([3, 2, 1])
    expect(sortHelper(input, person => person.lastName)).toEqual([2, 3, 1])
    expect(sortHelper(input, person => person.date)).toEqual([3, 2, 1])
  })

  it('should sort the array by the key names in the selector argument', () => {
    expect(sortHelper(input, 'firstName')).toEqual([3, 2, 1])
    // expect(sortHelper(input, 'lastName')).toEqual([2, 3, 1])
    expect(sortHelper(input, 'date')).toEqual([3, 2, 1])
  })

  it('should sort on nested key', () => {
    const nested = [
      { id: 1, one: { two: { three: 'C' } } },
      { id: 2, one: { two: { three: 'A' } } },
      { id: 3 },
      { id: 4, one: { } },
      { id: 5, one: { two: { } } },
      { id: 6, one: { two: { three: 'B' } } }
    ]
    expect(sortHelper(nested, 'one.two.three')).toEqual([3, 4, 5, 2, 6, 1])
  })

  it('should sort by descending if specified', () => {
    expect(sortHelper(input, person => person.firstName, true)).toEqual([1, 2, 3])
    expect(sortHelper(input, person => person.lastName, true)).toEqual([1, 3, 2])
    expect(sortHelper(input, person => person.date, true)).toEqual([1, 2, 3])
  })

  it('should sort arrays of values', () => {
    expect(sortArray([3, 2, 1])).toEqual([1, 2, 3])
    expect(sortArray(['sheep', 'cow', 'rabbit'])).toEqual(['cow', 'rabbit', 'sheep'])
  })
})
