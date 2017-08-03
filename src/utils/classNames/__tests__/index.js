import classNames from '../'

describe('classNames', () => {
  it('concatenates strings', () => {
    expect(classNames('it', 'works')).toBe('it works')
  })

  it('handles conditional strings', () => {
    const truthy = true
    const actual1 = classNames('it', truthy ? 'is-active' : 'is-disabled')
    expect(actual1).toBe('it is-active')

    const falsy = false
    const actual2 = classNames('it', falsy ? 'is-active' : 'is-disabled')
    expect(actual2).toBe('it is-disabled')
  })

  it('handles conditional objects', () => {
    const truthy = true
    const actual1 = classNames('it', { 'is-active': truthy })
    expect(actual1).toBe('it is-active')

    const falsy = false
    const actual2 = classNames('it', { 'is-active': falsy })
    expect(actual2).toBe('it')
  })

  it('handles undefined values', () => {
    const actual1 = classNames('it', undefined)
    expect(actual1).toBe('it')
  })

  it('handles null values', () => {
    const actual1 = classNames('it', null)
    expect(actual1).toBe('it')
  })
})
