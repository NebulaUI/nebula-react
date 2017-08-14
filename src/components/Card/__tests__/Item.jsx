import React from 'react'
import { shallow } from 'enzyme'

import { Card } from '../'

describe('<Card.Item />', () => {
  it('passes in an optional className', () => {
    const $ = shallow(<Card.Item className="c-status-card" />)
    expect($.hasClass('c-card c-status-card')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Card.Item node="article">_</Card.Item>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Card.Item>-</Card.Item>)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Card.Item style={{ position: 'relative' }} ariaHidden="true">
        _
      </Card.Item>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders children', () => {
    const $ = shallow(
      <Card.Item>
        Card children
      </Card.Item>
    )
    expect($.contains('Card children')).toBe(true)
  })
})
