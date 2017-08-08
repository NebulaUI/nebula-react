import React from 'react'
import { shallow } from 'enzyme'

import { Navbar } from '../'

describe('<Navbar.Toggle.Wrapper />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Navbar.Toggle.Wrapper>
        Toggle.Wrapper text
      </Navbar.Toggle.Wrapper>
    )
    expect($.contains('Toggle.Wrapper text')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Toggle.Wrapper className="test">Test</Navbar.Toggle.Wrapper>)
    expect($.hasClass('c-navbar__toggle test')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Toggle.Wrapper style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.Toggle.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('calls handleToggle.Wrapper when clicked', () => {
    const handleToggleWrapperMock = jest.fn()
    const $ = shallow(<Navbar.Toggle.Wrapper handleToggle={handleToggleWrapperMock} />)
    expect(handleToggleWrapperMock).not.toHaveBeenCalled()

    $.simulate('click')
    expect(handleToggleWrapperMock).toHaveBeenCalled()
  })

  it('takes a callback that is called with the event and component instance when clicked', () => {
    const mockCallback = jest.fn()
    const mockEvent = 'test'
    const $ = shallow(<Navbar.Toggle.Wrapper callback={mockCallback}>Test</Navbar.Toggle.Wrapper>)
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click', mockEvent)
    expect(mockCallback).toHaveBeenCalledWith(mockEvent, $.instance())
  })

  it('does not attempt to call a callback when clicked if no callback is passed', () => {
    const mockCallback = jest.fn()
    const $ = shallow(<Navbar.Toggle.Wrapper>Test</Navbar.Toggle.Wrapper>)
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click')

    expect(mockCallback).not.toHaveBeenCalled()
  })
})
