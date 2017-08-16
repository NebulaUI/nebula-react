import React from 'react'
import { shallow } from 'enzyme'

import { Flyouts } from '../'

describe('<Flyouts.Flyout />', () => {
  it('renders a "div" by default', () => {
    const $ = shallow(<Flyouts.Flyout>_</Flyouts.Flyout>)
    expect($.type()).toBe('div')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Flyouts.Flyout node="article">_</Flyouts.Flyout>)
    expect($.type()).toBe('article')
  })

  it('renders with the correct default className', () => {
    const $ = shallow(<Flyouts.Flyout className="c-flyout-content">_</Flyouts.Flyout>)
    expect($.hasClass('c-flyout-content')).toBe(true)
  })

  describe('status styling', () => {
    it('renders the direction as ne', () => {
      const $ = shallow(<Flyouts.Flyout direction="success">_</Flyouts.Flyout>)
      expect($.hasClass('c-flyout-content c-flyout-content--ne')).toBe(true)
    })

    it('renders the direction as se', () => {
      const $ = shallow(<Flyouts.Flyout direction="info">_</Flyouts.Flyout>)
      expect($.hasClass('c-flyout-content c-flyout-content--se')).toBe(true)
    })

    it('renders the direction as sw', () => {
      const $ = shallow(<Flyouts.Flyout direction="warning">_</Flyouts.Flyout>)
      expect($.hasClass('c-flyout-content c-flyout-content--sw')).toBe(true)
    })

    it('renders the direction as nw', () => {
      const $ = shallow(<Flyouts.Flyout direction="error">_</Flyouts.Flyout>)
      expect($.hasClass('c-flyout-content c-flyout-content--nw')).toBe(true)
    })
  })

  it('renders children', () => {
    const $ = shallow(<Flyouts.Flyout>test child</Flyouts.Flyout>)
    expect($.contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Flyouts.Flyout style={{ position: 'relative' }} ariaHidden="true">
        _
      </Flyouts.Flyout>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
