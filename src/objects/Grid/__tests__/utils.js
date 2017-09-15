import { buildBreakpointValues } from '../utils'

describe('buildBreakpointValues', () => {
  it('builds out a string of values and associated breakpionts', () => {
    const expected = ['test1', 'test2', 'test1@lg', 'test2@lg', 'test1@md', 'test2@md', 'test1@sm', 'test2@sm', 'test1@xs', 'test2@xs']
    const actual = buildBreakpointValues(['test1', 'test2'])
    expect(actual).toEqual(expected)
  })
})
