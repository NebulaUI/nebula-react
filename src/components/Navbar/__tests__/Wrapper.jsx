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
    expect($.hasClass('c-navbar test')).toBe(true)
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
})
