import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Pill } from '../'

describe('<Pill />', () => {
  it('renders with the default className', () => {
    const $ = shallow(<Pill>_</Pill>)
    expect($.hasClass(`${NAMESPACE}c-pill`)).toBe(true)
  })

  it('renders with an optional className', () => {
    const $ = shallow(<Pill className="test">_</Pill>)
    expect($.hasClass('test')).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-pill`)).toBe(true)
  })

  it('renders a "div" by default', () => {
    const $ = shallow(<Pill>_</Pill>)
    expect($.type()).toBe('div')
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Pill tag="a">_</Pill>)
    expect($.type()).toBe('a')
  })

  it('renders a link when passed a "to" prop', () => {
    const $ = shallow(<Pill to="/">_</Pill>)
    expect($.type()).toBe('a')
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

    it('passes through "to", "className" and props', () => {
      const $ = shallow(
        <Pill
          className="test"
          component={RRPill}
          to="/test"
        >Nebula</Pill>
      )
      expect($.find(RRPill).hasClass(`${NAMESPACE}c-pill`)).toBe(true)
      expect($.find(RRPill).hasClass('test')).toBe(true)
      expect($.find(RRPill).prop('to')).toBe('/test')
    })

    it('renders with the correct status', () => {
      const $ = shallow(
        <Pill
          status="success"
          component={RRPill}
          to="/test"
        >Nebula</Pill>
      )
      expect($.find(RRPill).hasClass(`${NAMESPACE}c-pill`)).toBe(true)
      expect($.find(RRPill).hasClass(`${NAMESPACE}c-pill--success`)).toBe(true)
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
