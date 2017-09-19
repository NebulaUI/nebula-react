import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'

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
    expect($.hasClass(`${NAMESPACE}o-flag@md`)).toBe(true)
  })

  it('renders with a gutter', () => {
    const $ = shallow(<Flag.Wrapper gutter="md" />)
    expect($.hasClass(`${NAMESPACE}o-flag ${NAMESPACE}o-flag--gutter-md`)).toBe(true)
  })

  it('renders reverse', () => {
    const $ = shallow(<Flag.Wrapper reverse />)
    expect($.hasClass(`${NAMESPACE}o-flag ${NAMESPACE}o-flag--reverse`)).toBe(true)
  })

  it('renders content vertically aligned to the top', () => {
    const $ = shallow(<Flag.Wrapper align="top" />)
    expect($.hasClass(`${NAMESPACE}o-flag ${NAMESPACE}o-flag--top`)).toBe(true)
  })

  it('renders content vertically aligned to the bottom', () => {
    const $ = shallow(<Flag.Wrapper align="bottom" />)
    expect($.hasClass(`${NAMESPACE}o-flag ${NAMESPACE}o-flag--bottom`)).toBe(true)
  })

  it('takes a defined className', () => {
    const $ = shallow(<Flag.Wrapper className="test" />)
    expect($.hasClass(`${NAMESPACE}o-flag ${NAMESPACE}test`)).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Flag.Wrapper style={{ position: 'relative' }} ariaHidden="true">
        _
      </Flag.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Flag.Wrapper tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Flag.Wrapper />)
    expect($.type()).toBe('div')
  })
})
