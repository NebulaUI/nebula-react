import getHeight from '../getHeight'

describe('<Foldable.Body />', () => {
  it('passes in an optional className', () => {
    const node = {
      getBoundingClientRect: () => ({
        height: 100
      })
    }
    expect(getHeight(node)).toBe(100)
  })
})
