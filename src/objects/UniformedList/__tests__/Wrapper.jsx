import React from 'react'
import { shallow } from 'enzyme'

import { UniformedList } from '../'

describe('<UniformedList.Wrapper />', () => {
  it('takes a single breakpoint', () => {
    const $ = shallow(<UniformedList.Wrapper breakpoint="md" />)
    expect($.hasClass('o-bare-list o-uniformed-list@md')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <UniformedList.Wrapper>
        <div className="child" />
      </UniformedList.Wrapper>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<UniformedList.Wrapper node="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a ul by default', () => {
    const $ = shallow(<UniformedList.Wrapper />)
    expect($.type()).toBe('ul')
  })

  it('renders with the default className', () => {
    const $ = shallow(<UniformedList.Wrapper />)
    expect($.hasClass('o-uniformed-list')).toBe(true)
  })

  it('renders the user defined className', () => {
    const $ = shallow(<UniformedList.Wrapper className="test" />)
    expect($.hasClass('o-uniformed-list test')).toBe(true)
  })
})
