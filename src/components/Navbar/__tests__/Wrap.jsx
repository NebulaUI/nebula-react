import React from 'react'
import { shallow } from 'enzyme'

import { Navbar } from '../'

describe('<Navbar.Wrap />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Navbar.Wrap>
        Wrap text
      </Navbar.Wrap>
    )
    expect($.contains('Wrap text')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Wrap className="test">_</Navbar.Wrap>)
    expect($.hasClass('c-navbar__wrap test')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Wrap style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.Wrap>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('passes handleToggle to appropriate children', () => {
    const handleToggle = jest.fn()
    const $ = shallow(
      <Navbar.Wrap handleToggle={handleToggle}>
        <Navbar.Toggle.Wrapper>_</Navbar.Toggle.Wrapper>
      </Navbar.Wrap>
    )
    expect($.find(Navbar.Toggle.Wrapper).prop('handleToggle')).toBe(handleToggle)
  })
})
