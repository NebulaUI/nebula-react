import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Navbar } from '../'

describe('<Navbar.Logo />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Logo to="/" className="test">Test</Navbar.Logo>)
    expect($.hasClass(`${NAMESPACE}c-navbar__logo`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <Navbar.Logo to="/">
        Logo text
      </Navbar.Logo>
    )
    expect($.contains('Logo text')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Navbar.Logo to="/" tag="article">_</Navbar.Logo>)
    expect($.type()).toBe('article')
  })

  it('renders an a by default', () => {
    const $ = shallow(<Navbar.Logo to="/">-</Navbar.Logo>)
    expect($.type()).toBe('a')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Logo to="/" style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.Logo>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('takes a width', () => {
    const $ = shallow(<Navbar.Logo to="/" width="200px">_</Navbar.Logo>)
    expect($.prop('style')).toEqual({ width: '200px' })
  })

  it('takes a "to" prop that renders as a href attribute', () => {
    const $ = shallow(<Navbar.Logo to="/test">Test</Navbar.Logo>)
    expect($.prop('href')).toBe('/test')
  })

  it('takes a callback that is called with the event and component instance when clicked', () => {
    const mockCallback = jest.fn()
    const mockEvent = 'test'
    const $ = shallow(<Navbar.Logo to="/" onClick={mockCallback}>Test</Navbar.Logo>)
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
