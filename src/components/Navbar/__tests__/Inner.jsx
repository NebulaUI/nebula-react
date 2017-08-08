import React from 'react'
import { shallow } from 'enzyme'

import { Navbar } from '../'

describe('<Navbar.Inner />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Navbar.Inner>
        Inner text
      </Navbar.Inner>
    )
    expect($.contains('Inner text')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Inner className="test">_</Navbar.Inner>)
    expect($.hasClass('c-navbar__wrap test')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Inner style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.Inner>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('passes handleToggle to appropriate children', () => {
    const handleToggle = jest.fn()
    const $ = shallow(
      <Navbar.Inner handleToggle={handleToggle}>
        <Navbar.Toggle.Wrapper>_</Navbar.Toggle.Wrapper>
      </Navbar.Inner>
    )
    expect($.find(Navbar.Toggle.Wrapper).prop('handleToggle')).toBe(handleToggle)
  })
})
