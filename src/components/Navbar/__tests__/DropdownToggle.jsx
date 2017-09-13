import React from 'react'
import { shallow } from 'enzyme'

import { Navbar } from '../'

const defaultContext = {
  navbarDropdownToggleOpen: jest.fn()
}

describe('<Navbar.Dropdown.Toggle />', () => {
  it('renders children', () => {
    const child = <div />
    const $ = shallow(
      <Navbar.Dropdown.Toggle>
        <child />
      </Navbar.Dropdown.Toggle>
    , { context: defaultContext })
    expect($.contains(<child />)).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(
      <Navbar.Dropdown.Toggle className="test">_</Navbar.Dropdown.Toggle>
    , { context: defaultContext })
    expect($.hasClass('c-navbar__dropdown-toggle test')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(
      <Navbar.Dropdown.Toggle tag="article">_</Navbar.Dropdown.Toggle>
      , { context: defaultContext })
    expect($.type()).toBe('article')
  })

  it('renders a button by default', () => {
    const $ = shallow(
      <Navbar.Dropdown.Toggle>-</Navbar.Dropdown.Toggle>
      , { context: defaultContext })
    expect($.type()).toBe('button')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Dropdown.Toggle style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.Dropdown.Toggle>
    , { context: defaultContext })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('can be opened and closed', () => {
    const mockToggleOpen = jest.fn()
    const context = {
      ...defaultContext,
      navbarDropdownToggleOpen: mockToggleOpen
    }
    const $ = shallow(<Navbar.Dropdown.Toggle>_</Navbar.Dropdown.Toggle>, { context })

    expect(mockToggleOpen).not.toHaveBeenCalled()

    $.simulate('click')
    expect(mockToggleOpen).toHaveBeenCalled()
  })
})
