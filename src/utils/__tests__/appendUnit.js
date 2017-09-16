import appendUnit from '../appendUnit'

describe('appendUnit', () => {
  it('Appends a unit to a value if it does not already exist', () => {
    expect(appendUnit(100, 'px')).toBe('100px')
    expect(appendUnit('100', 'px')).toBe('100px')
    expect(appendUnit('100px', 'px')).toBe('100px')
  })
})
