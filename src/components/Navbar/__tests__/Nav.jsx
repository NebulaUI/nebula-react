import React from 'react'
import { shallow } from 'enzyme'

import { Navbar } from '../'

describe('<Navbar.Nav />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Navbar.Nav>
        Nav text
      </Navbar.Nav>
    )
    expect($.contains('Nav text')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Nav className="test">_</Navbar.Nav>)
    expect($.hasClass('c-navbar__nav test')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Nav style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.Nav>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
