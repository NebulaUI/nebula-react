import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'

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
    expect($.hasClass(`${NAMESPACE}c-navbar__link ${NAMESPACE}test`)).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Navbar.Link to="/" tag="article">_</Navbar.Link>)
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
    const $ = shallow(<Navbar.Link to="/" onClick={mockCallback}>Test</Navbar.Link>)
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

  describe('HOC', () => {
    // eslint-disable-next-line react/prop-types
    const RRNavLink = props => <div>{props.children}</div>

    it('renders the component with children', () => {
      const $ = shallow(<Navbar.Link component={RRNavLink} to="/test">Nebula</Navbar.Link>)
      expect($.find(RRNavLink)).toHaveLength(1)
      expect($.find(RRNavLink).contains('Nebula')).toBe(true)
    })

    it('passes through "to", "className" and "activeClassName" props', () => {
      const $ = shallow(
        <Navbar.Link
          className="test"
          activeClassName="is-test"
          component={RRNavLink}
          to="/test"
        >Nebula</Navbar.Link>
      )
      expect($.find(RRNavLink).hasClass(`${NAMESPACE}c-navbar__link ${NAMESPACE}test`)).toBe(true)
      expect($.find(RRNavLink).prop('activeClassName')).toBe(`${NAMESPACE}is-test`)
      expect($.find(RRNavLink).prop('to')).toBe('/test')
    })

    it('gets an activeClassName default', () => {
      const $ = shallow(
        <Navbar.Link
          component={RRNavLink}
          to="/"
        >Nebula</Navbar.Link>
      )
      expect($.find(RRNavLink).prop('activeClassName')).toBe(`${NAMESPACE}is-active`)
    })

    it('renders with attributes', () => {
      const $ = shallow(
        <Navbar.Link
          component={RRNavLink}
          to="/"
          style={{ position: 'relative' }}
          ariaHidden="true"
        >
          _
        </Navbar.Link>
      )
      expect($.find(RRNavLink).prop('style')).toEqual({
        position: 'relative'
      })
      expect($.find(RRNavLink).prop('ariaHidden')).toBe('true')
    })
  })
})
