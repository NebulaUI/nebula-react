import React from 'react'
import { shallow } from 'enzyme'

import { Navbar } from '../'

describe('<Navbar.Dropdown.Wrapper />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Navbar.Dropdown.Wrapper>
        Dropdown.Wrapper text
      </Navbar.Dropdown.Wrapper>
    )
    expect($.contains('Dropdown.Wrapper text')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Dropdown.Wrapper className="test">_</Navbar.Dropdown.Wrapper>)
    expect($.hasClass('c-navbar__item test')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Navbar.Dropdown.Wrapper node="article">_</Navbar.Dropdown.Wrapper>)
    expect($.type()).toBe('article')
  })

  it('renders a li by default', () => {
    const $ = shallow(<Navbar.Dropdown.Wrapper>-</Navbar.Dropdown.Wrapper>)
    expect($.type()).toBe('li')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Dropdown.Wrapper style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.Dropdown.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
