import React from 'react'
import { shallow } from 'enzyme'

import { Flyout } from '../'
import { NAMESPACE, FLYOUT_DIRECTIONS as DIRECTIONS } from '../../../constants'

const defaultProps = {
  direction: DIRECTIONS[0]
}

describe('<Flyout.Content />', () => {
  it('renders with appropriate classNames', () => {
    const props = {
      ...defaultProps,
      className: 'test'
    }
    const $ = shallow(<Flyout.Content {...props}>_</Flyout.Content>)
    expect($.hasClass(`${NAMESPACE}c-flyout__content`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders with a set direction', () => {
    const props = {
      ...defaultProps,
      direction: DIRECTIONS[1]
    }
    const $ = shallow(<Flyout.Content {...props}>Test child</Flyout.Content>)
    expect($.hasClass(`${NAMESPACE}c-flyout__content ${NAMESPACE}c-flyout__content--${DIRECTIONS[1]}`)).toBe(true)
  })

  it('renders a "div" by default', () => {
    const $ = shallow(<Flyout.Content {...defaultProps}>_</Flyout.Content>)
    expect($.type()).toBe('div')
  })

  it('renders a defined tag type', () => {
    const props = {
      ...defaultProps,
      tag: 'article'
    }
    const $ = shallow(<Flyout.Content {...props}>_</Flyout.Content>)
    expect($.type()).toBe('article')
  })


  it('renders children when open', () => {
    const context = { isFlyoutOpen: true }
    const $ = shallow(<Flyout.Content {...defaultProps}>Test child</Flyout.Content>, { context })
    expect($.contains('Test child')).toBe(true)
  })

  it('does not render children when closed', () => {
    const context = { isFlyoutOpen: false }
    const $ = shallow(<Flyout.Content {...defaultProps}>Test child</Flyout.Content>, { context })
    expect($.contains('Test child')).toBe(false)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Flyout.Content
        {...defaultProps}
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

  it('renders with a width', () => {
    const props = {
      ...defaultProps,
      width: 200
    }
    const $ = shallow(
      <Flyout.Content {...props}>
        _
      </Flyout.Content>
    )
    expect($.prop('style')).toEqual({
      width: '200px'
    })
  })
})
