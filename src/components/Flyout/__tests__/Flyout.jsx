import React from 'react'
import { shallow } from 'enzyme'

import { Flyout } from '../'

describe('<Flyout />', () => {
  it('renders a "div" by default', () => {
    const $ = shallow(<Flyout>_</Flyout>)
    expect($.type()).toBe('div')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Flyout node="article">_</Flyout>)
    expect($.type()).toBe('article')
  })

  it('renders with the correct default className', () => {
    const $ = shallow(<Flyout className="c-flyout-content">_</Flyout>)
    expect($.hasClass('c-flyout-content')).toBe(true)
  })

  describe('status styling', () => {
    it('renders the direction as ne', () => {
      const $ = shallow(<Flyout direction="success">_</Flyout>)
      expect($.hasClass('c-flyout-content c-flyout-content--ne')).toBe(true)
    })

    it('renders the direction as se', () => {
      const $ = shallow(<Flyout direction="info">_</Flyout>)
      expect($.hasClass('c-flyout-content c-flyout-content--se')).toBe(true)
    })

    it('renders the direction as sw', () => {
      const $ = shallow(<Flyout direction="warning">_</Flyout>)
      expect($.hasClass('c-flyout-content c-flyout-content--sw')).toBe(true)
    })

    it('renders the direction as nw', () => {
      const $ = shallow(<Flyout direction="error">_</Flyout>)
      expect($.hasClass('c-flyout-content c-flyout-content--nw')).toBe(true)
    })
  })

  it('renders children', () => {
    const $ = shallow(<Flyout>test child</Flyout>)
    expect($.contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Flyout style={{ position: 'relative' }} ariaHidden="true">
        _
      </Flyout>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
