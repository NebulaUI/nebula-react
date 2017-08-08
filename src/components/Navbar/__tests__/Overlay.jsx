import React from 'react'
import { shallow } from 'enzyme'

import { Navbar } from '../'

describe('<Navbar.Overlay />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Navbar.Overlay>
        Overlay text
      </Navbar.Overlay>
    )
    expect($.contains('Overlay text')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Overlay className="test">Test</Navbar.Overlay>)
    expect($.hasClass('c-navbar__overlay test')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Overlay style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.Overlay>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('calls handleToggle when clicked', () => {
    const handleToggleMock = jest.fn()
    const $ = shallow(<Navbar.Overlay handleToggle={handleToggleMock} />)
    expect(handleToggleMock).not.toHaveBeenCalled()

    $.simulate('click')
    expect(handleToggleMock).toHaveBeenCalled()
  })

  it('takes a callback that is called with the event and component instance when clicked', () => {
    const mockCallback = jest.fn()
    const mockEvent = 'test'
    const $ = shallow(<Navbar.Overlay callback={mockCallback}>Test</Navbar.Overlay>)
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click', mockEvent)
    expect(mockCallback).toHaveBeenCalledWith(mockEvent, $.instance())
  })

  it('does not attempt to call a callback when clicked if no callback is passed', () => {
    const mockCallback = jest.fn()
    const $ = shallow(<Navbar.Overlay>Test</Navbar.Overlay>)
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click')

    expect(mockCallback).not.toHaveBeenCalled()
  })
})
