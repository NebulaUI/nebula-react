import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { UniformedList } from '../'

describe('<UniformedList.Wrapper />', () => {
  it('renders the default className', () => {
    const $ = shallow(<UniformedList.Wrapper />)
    expect($.hasClass(`${NAMESPACE}o-uniformed-list`)).toBe(true)
  })

  it('renders the user defined className', () => {
    const $ = shallow(<UniformedList.Wrapper className="test" />)
    expect($.hasClass('test')).toBe(true)
  })

  it('takes a single breakpoint', () => {
    const $ = shallow(<UniformedList.Wrapper breakpoint="md" />)
    expect($.hasClass(`${NAMESPACE}o-bare-list ${NAMESPACE}o-uniformed-list@md`)).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <UniformedList.Wrapper>
        <div className="child" />
      </UniformedList.Wrapper>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<UniformedList.Wrapper tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a ul by default', () => {
    const $ = shallow(<UniformedList.Wrapper />)
    expect($.type()).toBe('ul')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <UniformedList.Wrapper style={{ position: 'relative' }} ariaHidden="true">
        _
      </UniformedList.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
