import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'

import { StatusCard } from '../'

const defaultProps = {
  status: 'success'
}

describe('<StatusCard />', () => {
  it('renders a "div" by default', () => {
    const $ = shallow(<StatusCard {...defaultProps}>_</StatusCard>)
    expect($.type()).toBe('div')
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<StatusCard tag="article" {...defaultProps}>_</StatusCard>)
    expect($.type()).toBe('article')
  })

  it('renders with the correct default className', () => {
    const $ = shallow(<StatusCard {...defaultProps}>_</StatusCard>)
    expect($.hasClass(`${NAMESPACE}c-status-card`)).toBe(true)
  })

  describe('status styling', () => {
    it('renders with success', () => {
      const $ = shallow(<StatusCard status="success">_</StatusCard>)
      expect($.hasClass(`${NAMESPACE}c-status-card ${NAMESPACE}c-status-card--success`)).toBe(true)
    })

    it('renders with info', () => {
      const $ = shallow(<StatusCard status="info">_</StatusCard>)
      expect($.hasClass(`${NAMESPACE}c-status-card ${NAMESPACE}c-status-card--info`)).toBe(true)
    })

    it('renders with warning', () => {
      const $ = shallow(<StatusCard status="warning">_</StatusCard>)
      expect($.hasClass(`${NAMESPACE}c-status-card ${NAMESPACE}c-status-card--warning`)).toBe(true)
    })

    it('renders with error', () => {
      const $ = shallow(<StatusCard status="error">_</StatusCard>)
      expect($.hasClass(`${NAMESPACE}c-status-card ${NAMESPACE}c-status-card--error`)).toBe(true)
    })
  })

  it('renders children', () => {
    const $ = shallow(<StatusCard {...defaultProps}>test child</StatusCard>)
    expect($.contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <StatusCard {...defaultProps} style={{ position: 'relative' }} ariaHidden="true">
        _
      </StatusCard>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
