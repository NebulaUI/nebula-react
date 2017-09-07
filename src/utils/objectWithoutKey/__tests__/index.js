import objectWithoutKey from '../'

describe('objectWithoutKey', () => {
  it('removes a specified key from an object', () => {
    const initial = {
      foo: 'bar',
      baz: 'bam'
    }
    expect(objectWithoutKey(initial, 'baz')).toEqual({
      foo: 'bar'
    })
  })
})
