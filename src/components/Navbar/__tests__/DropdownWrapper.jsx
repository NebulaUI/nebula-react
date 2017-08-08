import React from 'react'
import { shallow, mount } from 'enzyme'

import { Navbar } from '../'
import { addEventListener, removeEventListener } from '../../../utils/window'

jest.mock('../../../utils/window')

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

  it('renders closed on the initial render', () => {
    const $ = shallow(<Navbar.Dropdown.Wrapper>_</Navbar.Dropdown.Wrapper>)
    expect($.hasClass('c-navbar__item is-open')).toBe(false)
  })

  it('can be opened and closed', () => {
    const $ = shallow(
      <Navbar.Dropdown.Wrapper>
        <Navbar.Dropdown.Toggle>_</Navbar.Dropdown.Toggle>
      </Navbar.Dropdown.Wrapper>
    )
    expect($.hasClass('c-navbar__item is-open')).toBe(false)

    $.find(Navbar.Dropdown.Toggle).prop('handleToggle')()
    expect($.hasClass('c-navbar__item is-open')).toBe(true)

    $.find(Navbar.Dropdown.Toggle).prop('handleToggle')()
    expect($.hasClass('c-navbar__item is-open')).toBe(false)

    $.find(Navbar.Dropdown.Toggle).prop('handleToggle')()
    expect($.hasClass('c-navbar__item is-open')).toBe(true)
  })

  it('adds a click handler to the window when mounted and removes it when it unmounts', () => {
    const mockAddEventListener = jest.fn()
    const mockRemoveEventListener = jest.fn()
    addEventListener.mockImplementation(mockAddEventListener)
    removeEventListener.mockImplementation(mockRemoveEventListener)

    const $ = mount(<Navbar.Dropdown.Wrapper>_</Navbar.Dropdown.Wrapper>)
    const handleClickOutside = $.instance().handleClickOutside
    expect(mockAddEventListener).toHaveBeenCalledWith('click', handleClickOutside)
    $.unmount()
    expect(mockRemoveEventListener).toHaveBeenCalledWith('click', handleClickOutside)
  })

  it('closes when clicked outside', () => {
    const $ = mount(
      <Navbar.Dropdown.Wrapper>
        <Navbar.Dropdown.Toggle>_</Navbar.Dropdown.Toggle>
      </Navbar.Dropdown.Wrapper>
    )
    $.setState({
      isOpen: true
    })
    expect($.find('.c-navbar__item').hasClass('is-open')).toBe(true)
    $.instance().handleClickOutside({
      target: 'foo'
    })
    expect($.find('.c-navbar__item').hasClass('is-open')).toBe(false)
  })
})
