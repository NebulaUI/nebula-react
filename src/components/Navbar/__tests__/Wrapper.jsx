import React from 'react'
import { shallow } from 'enzyme'

import { Navbar } from '../'

describe('<Navbar.Wrapper />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Navbar.Wrapper>
        Wrapper text
      </Navbar.Wrapper>
    )
    expect($.contains('Wrapper text')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Wrapper className="test">_</Navbar.Wrapper>)
    expect($.hasClass('c-navbar')).toBe(true)
    expect($.children().hasClass('c-navbar__inner test')).toBe(true)
  })

  it('renders sticky', () => {
    const $ = shallow(<Navbar.Wrapper sticky>_</Navbar.Wrapper>)
    expect($.children().hasClass('is-sticky')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Navbar.Wrapper node="article">_</Navbar.Wrapper>)
    expect($.type()).toBe('article')
  })

  it('renders a header by default', () => {
    const $ = shallow(<Navbar.Wrapper>-</Navbar.Wrapper>)
    expect($.type()).toBe('header')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Wrapper style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders closed on the initial render', () => {
    const $ = shallow(<Navbar.Wrapper>_</Navbar.Wrapper>)
    expect($.hasClass('is-open')).toBe(false)
  })

  it('can be opened and closed', () => {
    const $ = shallow(
      <Navbar.Wrapper>
        <Navbar.Overlay>_</Navbar.Overlay>
        <Navbar.Inner>_</Navbar.Inner>
      </Navbar.Wrapper>
    )
    expect($.hasClass('is-open')).toBe(false)

    $.find(Navbar.Inner).prop('handleToggle')()
    expect($.hasClass('is-open')).toBe(true)

    $.find(Navbar.Overlay).prop('close')()
    expect($.hasClass('is-open')).toBe(false)
  })
})
