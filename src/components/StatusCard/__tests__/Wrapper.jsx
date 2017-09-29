import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { StatusCard } from '../'

describe('<StatusCard.Wrapper />', () => {
  it('takes a className that gets appended', () => {
    const $ = shallow(<StatusCard.Wrapper className="test">_</StatusCard.Wrapper>)
    expect($.hasClass(`${NAMESPACE}c-status-card`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('takes a status', () => {
    const $ = shallow(<StatusCard.Wrapper status="success">_</StatusCard.Wrapper>)
    expect($.hasClass(`${NAMESPACE}c-status-card`)).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-status-card--success`)).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<StatusCard.Wrapper tag="article">_</StatusCard.Wrapper>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<StatusCard.Wrapper>_</StatusCard.Wrapper>)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <StatusCard.Wrapper style={{ position: 'relative' }} ariaHidden>
        _
      </StatusCard.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<StatusCard.Wrapper>test child</StatusCard.Wrapper>)
    expect($.contains('test child')).toBe(true)
  })
})
