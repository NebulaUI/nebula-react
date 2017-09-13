import React from 'react'
import { shallow } from 'enzyme'

import { Navbar } from '../'

const defaultContext = {
  close: jest.fn()
}

describe('<Navbar.Overlay />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Navbar.Overlay>
        Overlay text
      </Navbar.Overlay>
    , { context: defaultContext })
    expect($.contains('Overlay text')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Overlay className="test" />, { context: defaultContext })
    expect($.hasClass('c-navbar__overlay test')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Navbar.Overlay tag="article" />, { context: defaultContext })
    expect($.type()).toBe('article')
  })

  it('renders a button by default', () => {
    const $ = shallow(<Navbar.Overlay />, { context: defaultContext })
    expect($.type()).toBe('button')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Overlay style={{ position: 'relative' }} ariaHidden="true" />
      , { context: defaultContext })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('calls handleToggle when clicked', () => {
    const closeMock = jest.fn()
    const context = {
      close: closeMock
    }
    const $ = shallow(<Navbar.Overlay />, { context })
    expect(closeMock).not.toHaveBeenCalled()

    $.simulate('click')
    expect(closeMock).toHaveBeenCalled()
  })

  it('takes a callback that is called with the event and component instance when clicked', () => {
    const mockCallback = jest.fn()
    const mockEvent = 'test'
    const context = {
      close: mockCallback
    }
    const $ = shallow(<Navbar.Overlay onClick={mockCallback} />, { context })
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click', mockEvent)
    expect(mockCallback).toHaveBeenCalledWith(mockEvent, $.instance())
  })
})
