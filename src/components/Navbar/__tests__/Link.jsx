import React from 'react'
import { shallow } from 'enzyme'

import { Navbar } from '../'

describe('<Navbar.Link />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Navbar.Link to="/">
        Link text
      </Navbar.Link>
    )
    expect($.contains('Link text')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Link to="/" className="test">Test</Navbar.Link>)
    expect($.hasClass('c-navbar__link test')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Navbar.Link to="/" node="article">_</Navbar.Link>)
    expect($.type()).toBe('article')
  })

  it('renders an a by default', () => {
    const $ = shallow(<Navbar.Link to="/">-</Navbar.Link>)
    expect($.type()).toBe('a')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Link to="/" style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.Link>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('takes a "to" prop that renders as a href attribute', () => {
    const $ = shallow(<Navbar.Link to="/test">Test</Navbar.Link>)
    expect($.prop('href')).toBe('/test')
  })

  it('takes a callback that is called with the event and component instance when clicked', () => {
    const mockCallback = jest.fn()
    const mockEvent = 'test'
    const $ = shallow(<Navbar.Link to="/" callback={mockCallback}>Test</Navbar.Link>)
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click', mockEvent)
    expect(mockCallback).toHaveBeenCalledWith(mockEvent, $.instance())
  })

  it('does not attempt to call a callback when clicked if no callback is passed', () => {
    const mockCallback = jest.fn()
    const $ = shallow(<Navbar.Link to="/">Test</Navbar.Link>)
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click')

    expect(mockCallback).not.toHaveBeenCalled()
  })
})
