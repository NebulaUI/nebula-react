import classNames from '../'

describe('classNames', () => {
  it('concatenates strings', () => {
    expect(classNames('it', 'works')).toBe('it works')
  })

  it('handles conditional strings', () => {
    const bool1 = true
    const actual1 = classNames('it', bool1 ? 'is-active' : 'is-disabled')
    expect(actual1).toBe('it is-active')

    const bool2 = false
    const actual2 = classNames('it', bool2 ? 'is-active' : 'is-disabled')
    expect(actual2).toBe('it is-disabled')
  })

  it('handles conditional objects', () => {
    const bool = true
    const actual = classNames('it', { 'is-active': bool })
    expect(actual).toBe('it is-active')
  })
})
