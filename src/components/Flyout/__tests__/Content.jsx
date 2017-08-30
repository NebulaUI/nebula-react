import React from 'react'
import { shallow } from 'enzyme'

import { Flyout } from '../'

describe('<Flyout.Content />', () => {
  it('renders a "div" by default', () => {
    const $ = shallow(<Flyout.Content>_</Flyout.Content>)
    expect($.type()).toBe('div')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Flyout.Content node="article">_</Flyout.Content>)
    expect($.type()).toBe('article')
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Flyout.Content className="test">_</Flyout.Content>)
    expect($.hasClass('c-flyout__content test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Flyout.Content isOpen>Test child</Flyout.Content>)
    expect($.contains('Test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Flyout.Content
        style={{ position: 'relative' }}
        ariaHidden="true"
      >
        _
      </Flyout.Content>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  describe('can be configured with a direction', () => {
    it('renders the direction as ne', () => {
      const $ = shallow(
        <Flyout.Content
          direction="ne"
        >
          _
        </Flyout.Content>
      )
      expect($.hasClass('c-flyout__content--ne')).toBe(true)
    })
  })
})
