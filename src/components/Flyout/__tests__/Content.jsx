import React from 'react'
import { shallow } from 'enzyme'

import { Flyout } from '../'

describe('<Flyout.Content />', () => {
  it('renders a "div" by default', () => {
    const $ = shallow(<Flyout.Content>_</Flyout.Content>)
    expect($.type()).toBe('div')
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Flyout.Content tag="article">_</Flyout.Content>)
    expect($.type()).toBe('article')
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Flyout.Content className="test">_</Flyout.Content>)
    expect($.hasClass('c-flyout__content test')).toBe(true)
  })

  it('renders children when open', () => {
    const context = { isFlyoutOpen: true }
    const $ = shallow(<Flyout.Content isOpen>Test child</Flyout.Content>, { context })
    expect($.contains('Test child')).toBe(true)
  })

  it('does not render children when closed', () => {
    const context = { isFlyoutOpen: false }
    const $ = shallow(<Flyout.Content isOpen>Test child</Flyout.Content>, { context })
    expect($.contains('Test child')).toBe(false)
  })

  it('renders with a set direction', () => {
    const context = { flyoutDirection: 'nw' }
    const $ = shallow(<Flyout.Content isOpen>Test child</Flyout.Content>, { context })
    expect($.hasClass('c-flyout__content c-flyout__content--nw')).toBe(true)
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
})
