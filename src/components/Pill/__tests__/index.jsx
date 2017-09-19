import React from 'react'
import { shallow, mount } from 'enzyme'

import { NAMESPACE } from '../../../constants'

import { Pill } from '../'

describe('<Pill />', () => {
  it('renders with the correct default className', () => {
    const $ = shallow(<Pill>_</Pill>)
    expect($.hasClass(`${NAMESPACE}c-pill`)).toBe(true)
  })

  it('renders a "button" by default', () => {
    const $ = shallow(<Pill>_</Pill>)
    expect($.type()).toBe('button')
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Pill tag="a">_</Pill>)
    expect($.type()).toBe('a')
  })

  it('renders a link when passed a "to" prop', () => {
    const $ = shallow(<Pill to="/">_</Pill>)
    expect($.type()).toBe('a')
  })

  it('renders with a border', () => {
    const $ = shallow(<Pill border>_</Pill>)
    expect($.hasClass(`${NAMESPACE}c-pill--border`)).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Pill>test child</Pill>)
    expect($.contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Pill style={{ position: 'relative' }} ariaHidden="true">
        _
      </Pill>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('warns the consumer when using both `isActive` and `status` props', () => {
    const mockWarn = jest.fn()
    window.console = { warn: mockWarn }
    mount(<Pill isActive status="success">_</Pill>)
    expect(mockWarn).toHaveBeenCalled()
  })

  it('doesnt warn the consumer when not using both `isActive` and `status` props', () => {
    const mockWarn = jest.fn()
    window.console = { warn: mockWarn }
    mount(<Pill status="success">_</Pill>)
    expect(mockWarn).not.toHaveBeenCalled()

    mount(<Pill isActive>_</Pill>)
    expect(mockWarn).not.toHaveBeenCalled()
  })

  describe('status styling', () => {
    it('renders with success', () => {
      const $ = shallow(<Pill status="success">_</Pill>)
      expect($.hasClass(`${NAMESPACE}c-pill--success`)).toBe(true)
    })

    it('renders with info', () => {
      const $ = shallow(<Pill status="info">_</Pill>)
      expect($.hasClass(`${NAMESPACE}c-pill--info`)).toBe(true)
    })

    it('renders with warning', () => {
      const $ = shallow(<Pill status="warning">_</Pill>)
      expect($.hasClass(`${NAMESPACE}c-pill--warning`)).toBe(true)
    })

    it('renders with error', () => {
      const $ = shallow(<Pill status="error">_</Pill>)
      expect($.hasClass(`${NAMESPACE}c-pill--error`)).toBe(true)
    })
  })

  it('takes a callback that is called with the event and component instance when clicked', () => {
    const mockCallback = jest.fn()
    const mockEvent = 'test'
    const $ = shallow(<Pill to="/" onClick={mockCallback}>Test</Pill>)
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click', mockEvent)
    expect(mockCallback).toHaveBeenCalledWith(mockEvent, $.instance())
  })

  it('does not attempt to call a callback when clicked if no callback is passed', () => {
    const mockCallback = jest.fn()
    const $ = shallow(<Pill to="/">Test</Pill>)
    expect(mockCallback).not.toHaveBeenCalled()

    $.simulate('click')

    expect(mockCallback).not.toHaveBeenCalled()
  })

  describe('HOC', () => {
    // eslint-disable-next-line react/prop-types
    const RRPill = props => <div>{props.children}</div>

    it('renders the component with children', () => {
      const $ = shallow(<Pill component={RRPill} to="/test">Nebula</Pill>)
      expect($.find(RRPill)).toHaveLength(1)
      expect($.find(RRPill).contains('Nebula')).toBe(true)
    })

    it('passes through "to", "className" and "activeClassName" props', () => {
      const $ = shallow(
        <Pill
          className="test"
          activeClassName="is-test"
          component={RRPill}
          to="/test"
        >Nebula</Pill>
      )
      expect($.find(RRPill).hasClass(`${NAMESPACE}c-pill ${NAMESPACE}test`)).toBe(true)
      expect($.find(RRPill).prop('activeClassName')).toBe(`${NAMESPACE}is-test`)
      expect($.find(RRPill).prop('to')).toBe('/test')
    })

    it('renders with attributes', () => {
      const $ = shallow(
        <Pill
          component={RRPill}
          to="/"
          style={{ position: 'relative' }}
          ariaHidden="true"
        >
          _
        </Pill>
      )
      expect($.find(RRPill).prop('style')).toEqual({
        position: 'relative'
      })
      expect($.find(RRPill).prop('ariaHidden')).toBe('true')
    })
  })
})
