import React from 'react'
import { shallow } from 'enzyme'

import { Flag } from '../'

describe('<FlagWrapper />', () => {
  it('renders the children', () => {
    const $ = shallow(
      <Flag.Wrapper>
        <div className="test" />
      </Flag.Wrapper>
    )
    expect($.contains(<div className="test" />)).toBe(true)
  })

  it('renders with a breakpoint', () => {
    const $ = shallow(<Flag.Wrapper breakpoint="md" />)
    expect($.hasClass('o-flag@md')).toBe(true)
  })

  it('renders with a gutter', () => {
    const $ = shallow(<Flag.Wrapper gutter="md" />)
    expect($.hasClass('o-flag o-flag--gutter-md')).toBe(true)
  })

  it('renders reverse', () => {
    const $ = shallow(<Flag.Wrapper reverse />)
    expect($.hasClass('o-flag o-flag--reverse')).toBe(true)
  })

  it('renders content vertically aligned to the top', () => {
    const $ = shallow(<Flag.Wrapper align="top" />)
    expect($.hasClass('o-flag o-flag--top')).toBe(true)
  })

  it('renders content vertically aligned to the bottom', () => {
    const $ = shallow(<Flag.Wrapper align="bottom" />)
    expect($.hasClass('o-flag o-flag--bottom')).toBe(true)
  })

  it('takes a defined className', () => {
    const $ = shallow(<Flag.Wrapper className="test" />)
    expect($.hasClass('o-flag test')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Flag.Wrapper node="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Flag.Wrapper />)
    expect($.type()).toBe('div')
  })
})
