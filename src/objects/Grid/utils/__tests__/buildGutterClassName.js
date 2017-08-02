import build from '../buildGutterClassName'

describe('buildGutterClassName', () => {
  it('builds a single gutter for a string', () => {
    expect(build('md')).toBe('o-grid--gutter-md')
  })

  it('builds a string of classnames for an array of gutters', () => {
    expect(build(['sm', 'lg'])).toBe('o-grid--gutter-sm o-grid--gutter-lg')
  })
})
