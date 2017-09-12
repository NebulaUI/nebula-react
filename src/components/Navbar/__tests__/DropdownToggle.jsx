import React from 'react'
import { shallow, mount } from 'enzyme'

import { Navbar } from '../'

import { addEListener, removeEListener } from '../../../utils/window'

jest.mock('../../../utils/window')

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

  it.only('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Dropdown.Toggle className="test">_</Navbar.Dropdown.Toggle>)
    expect($.childAt(0).hasClass('c-navbar__dropdown-toggle test')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Navbar.Dropdown.Toggle tag="article">_</Navbar.Dropdown.Toggle>)
    expect($.childAt(0).type()).toBe('article')
  })

  it('renders a button by default', () => {
    const $ = shallow(<Navbar.Dropdown.Toggle>-</Navbar.Dropdown.Toggle>)
    expect($.childAt(0).type()).toBe('button')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Dropdown.Toggle style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.Dropdown.Toggle>
    )
    expect($.childAt(0).prop('style')).toEqual({
      position: 'relative'
    })
    expect($.childAt(0).prop('ariaHidden')).toBe('true')
  })

  it('renders closed on the initial render', () => {
    const $ = shallow(<Navbar.Dropdown.Toggle>_</Navbar.Dropdown.Toggle>)
    expect($.hasClass('c-navbar__dropdown-toggle is-open')).toBe(false)
  })

  it('can be opened and closed', () => {
    const $ = shallow(<Navbar.Dropdown.Toggle>_</Navbar.Dropdown.Toggle>)
    const wrapper = $.childAt(0)
    expect(wrapper.hasClass('is-open')).toBe(false)

    wrapper.simulate('click')
    console.log(wrapper.prop('className'))
    expect(wrapper.hasClass('is-open')).toBe(true)
  })

  it('adds a click handler to the window when mounted and removes it when it unmounts', () => {
    const mockAddEventListener = jest.fn()
    const mockRemoveEventListener = jest.fn()
    addEListener.mockImplementation(mockAddEventListener)
    removeEListener.mockImplementation(mockRemoveEventListener)

    const $ = mount(<Navbar.Dropdown.Toggle>_</Navbar.Dropdown.Toggle>)
    const handleClickOutside = $.instance().handleClickOutside
    expect(mockAddEventListener).toHaveBeenCalledWith('click', handleClickOutside)
    $.unmount()
    expect(mockRemoveEventListener).toHaveBeenCalledWith('click', handleClickOutside)
  })

  it('closes when clicked outside', () => {
    const $ = mount(<Navbar.Dropdown.Toggle>_</Navbar.Dropdown.Toggle>)
    $.setState({
      isOpen: true
    })
    expect($.hasClass('is-open')).toBe(true)
    $.instance().handleClickOutside({
      target: 'foo'
    })
    expect($.hasClass('is-open')).toBe(false)
  })
})
