import React from 'react'
import { shallow } from 'enzyme'

import { Navbar } from '../'

describe('<Navbar.ContentWrapper />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Navbar.ContentWrapper>
        ContentWrapper text
      </Navbar.ContentWrapper>
    )
    expect($.contains('ContentWrapper text')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.ContentWrapper className="test">_</Navbar.ContentWrapper>)
    expect($.hasClass('c-navbar__content-wrapper test')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.ContentWrapper style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.ContentWrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Navbar.ContentWrapper node="article">_</Navbar.ContentWrapper>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Navbar.ContentWrapper>-</Navbar.ContentWrapper>)
    expect($.type()).toBe('div')
  })
})
