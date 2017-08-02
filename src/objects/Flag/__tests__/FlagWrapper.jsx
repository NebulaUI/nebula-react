import React from 'react'
import { shallow } from 'enzyme'

import FlagWrapper from '../FlagWrapper'

describe('<FlagWrapper />', () => {
  it('renders the children', () => {
    const $ = shallow(
      <FlagWrapper>
        <div className="test" />
      </FlagWrapper>
    )
    expect($.contains(<div className="test" />)).toBe(true)
  })

  it('renders with a breakpoint', () => {
    const $ = shallow(<FlagWrapper breakpoint="md" />)
    expect($.prop('className')).toBe('o-flag@md')
  })

  it('renders with a gutter', () => {
    const $ = shallow(<FlagWrapper gutter="md" />)
    expect($.prop('className')).toBe('o-flag o-flag--gutter-md')
  })

  it('renders reverse', () => {
    const $ = shallow(<FlagWrapper reverse />)
    expect($.prop('className')).toBe('o-flag o-flag--reverse')
  })

  it('passes down the className', () => {
    const $ = shallow(<FlagWrapper className="test" />)
    expect($.prop('className')).toBe('o-flag test')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<FlagWrapper node="article" />)
    expect($.type()).toBe('article')
  })
})
