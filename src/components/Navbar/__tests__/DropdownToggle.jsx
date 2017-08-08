import React from 'react'
import { shallow } from 'enzyme'

import { Navbar } from '../'

describe('<Navbar.Dropdown.Toggle />', () => {
  it('renders children', () => {
    const child = <div />
    const $ = shallow(
      <Navbar.Dropdown.Toggle>
        <child />
      </Navbar.Dropdown.Toggle>
    )
    expect($.contains(<child />)).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Dropdown.Toggle className="test">_</Navbar.Dropdown.Toggle>)
    expect($.hasClass('c-navbar__dropdown-toggle test')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Dropdown.Toggle style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.Dropdown.Toggle>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('takes handleToggle prop that is called when clicked', () => {
    const mockCallback = jest.fn()
    const $ = shallow(
      <Navbar.Dropdown.Toggle handleToggle={mockCallback}>_</Navbar.Dropdown.Toggle>
    )
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click')
    expect(mockCallback).toHaveBeenCalled()
  })
})
