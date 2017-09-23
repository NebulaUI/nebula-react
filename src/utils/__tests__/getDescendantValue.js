import getDescendantValue from '../getDescendantValue'

describe('getDescendantValue', () => {
  it('gets descendant text values from React components', () => {
    const tree = {
      props: {
        children: 'hello world'
      }
    }
    expect(getDescendantValue(tree)).toBe('hello world')
  })

  it('gets deeply nested text values from React components', () => {
    const tree = {
      props: {
        children: {
          props: {
            children: 'test'
          }
        }
      }
    }
    expect(getDescendantValue(tree)).toBe('test')
  })

  it('gets the first child when children are an array', () => {
    const tree = {
      props: {
        children: [
          {
            props: { children: 'hello' }
          },
          {
            props: { children: 'word' }
          }
        ]
      }
    }
    expect(getDescendantValue(tree)).toBe('hello')
  })

  it('returns date objects', () => {
    const tree = {
      props: {
        children: new Date('2017-09-09')
      }
    }
    expect(getDescendantValue(tree)).toEqual(new Date('2017-09-09'))
  })
})
