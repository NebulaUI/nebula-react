import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'

import { Navbar } from '../'

const defaultContext = {
  handleToggle: jest.fn()
}

describe('<Navbar.Toggle.Wrapper />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Navbar.Toggle.Wrapper>
        Toggle.Wrapper text
      </Navbar.Toggle.Wrapper>
    , { context: defaultContext })
    expect($.contains('Toggle.Wrapper text')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(
      <Navbar.Toggle.Wrapper className="test" />
    , { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-navbar__toggle ${NAMESPACE}test`)).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(
      <Navbar.Toggle.Wrapper tag="article" />
    , { context: defaultContext })
    expect($.type()).toBe('article')
  })

  it('renders a button by default', () => {
    const $ = shallow(<Navbar.Toggle.Wrapper />, { context: defaultContext })
    expect($.type()).toBe('button')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Toggle.Wrapper style={{ position: 'relative' }} ariaHidden="true" />
    , { context: defaultContext })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('calls handleToggle.Wrapper when clicked', () => {
    const handleToggleWrapperMock = jest.fn()
    const context = {
      handleToggle: handleToggleWrapperMock
    }
    const $ = shallow(<Navbar.Toggle.Wrapper />, { context })
    expect(handleToggleWrapperMock).not.toHaveBeenCalled()

    $.simulate('click')
    expect(handleToggleWrapperMock).toHaveBeenCalled()
  })

  it('takes a callback that is called with the event and component instance when clicked', () => {
    const mockCallback = jest.fn()
    const mockEvent = 'test'
    const context = {
      handleToggle: mockCallback
    }
    const $ = shallow(<Navbar.Toggle.Wrapper onClick={mockCallback} />, { context })
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click', mockEvent)
    expect(mockCallback).toHaveBeenCalledWith(mockEvent, $.instance())
  })

  it('does not attempt to call a callback when clicked if no callback is passed', () => {
    const mockCallback = jest.fn()
    const $ = shallow(<Navbar.Toggle.Wrapper />, { context: defaultContext })
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click')

    expect(mockCallback).not.toHaveBeenCalled()
  })
})
