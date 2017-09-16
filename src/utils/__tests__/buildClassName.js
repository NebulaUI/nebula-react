import buildClassName from '../buildClassName'

describe('buildClassName', () => {
  it('takes two strings and joins them', () => {
    expect(buildClassName('u-', '1/2@sm')).toBe('u-1/2@sm')
  })

  it('takes a string and an array and generates a string prefixing each item', () => {
    expect(buildClassName('u-', ['1/2', '1/3@sm'])).toBe('u-1/2 u-1/3@sm')
  })
})
