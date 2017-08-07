import React from 'react'
import { shallow } from 'enzyme'

import { Navbar } from '../'

describe('<Navbar.Logo />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Navbar.Logo to="/">
        Logo text
      </Navbar.Logo>
    )
    expect($.contains('Logo text')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Logo to="/" className="test">Test</Navbar.Logo>)
    expect($.hasClass('c-navbar__logo test')).toBe(true)
  })

  it('takes a "to" prop that renders as a href attribute', () => {
    const $ = shallow(<Navbar.Logo to="/test">Test</Navbar.Logo>)
    expect($.prop('href')).toBe('/test')
  })

  it('takes a callback that is called with the event and component instance when clicked', () => {
    const mockCallback = jest.fn()
    const mockEvent = 'test'
    const $ = shallow(<Navbar.Logo to="/" callback={mockCallback}>Test</Navbar.Logo>)
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click', mockEvent)
    expect(mockCallback).toHaveBeenCalledWith(mockEvent, $.instance())
  })

  it('does not attempt to call a callback when clicked if no callback is passed', () => {
    const mockCallback = jest.fn()
    const $ = shallow(<Navbar.Logo to="/">Test</Navbar.Logo>)
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click')

    expect(mockCallback).not.toHaveBeenCalled()
  })
})
