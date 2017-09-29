import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE, TOOLTIP_DIRECTIONS as DIRECTIONS } from '../../../constants'
import { Tooltip } from '../'

const defaultProps = {
  direction: DIRECTIONS[0]
}

describe('<Tooltip.Content />', () => {
  it('takes a className that gets appended', () => {
    const $ = shallow(
      <Tooltip.Content className="something else" {...defaultProps}>
        _
      </Tooltip.Content>
    )
    expect($.hasClass(`${NAMESPACE}c-tooltip__content`)).toBe(true)
    expect($.hasClass('something else')).toBe(true)
  })

  it('renders with a set direction', () => {
    const props = {
      ...defaultProps,
      direction: DIRECTIONS[1]
    }
    const $ = shallow(<Tooltip.Content {...props}>Test child</Tooltip.Content>)
    expect($.hasClass(`${NAMESPACE}c-tooltip__content`)).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-tooltip__content--${DIRECTIONS[1]}`)).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Tooltip.Content tag="article" {...defaultProps}>_</Tooltip.Content>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Tooltip.Content {...defaultProps}>_</Tooltip.Content>)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Tooltip.Content style={{ position: 'relative' }} ariaHidden {...defaultProps}>
        _
      </Tooltip.Content>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Tooltip.Content {...defaultProps}>test child</Tooltip.Content>)
    expect($.contains('test child')).toBe(true)
  })
})
