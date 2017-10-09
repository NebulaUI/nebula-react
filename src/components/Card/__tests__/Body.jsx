import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Card } from '../'

describe('<Card.Body />', () => {
  it('passes in an optional className override', () => {
    const $ = shallow(<Card.Body className="something else" />)
    expect($.hasClass(`${NAMESPACE}c-card__body`)).toBe(true)
    expect($.hasClass('something else')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Card.Body tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Card.Body />)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Card.Body style={{ position: 'relative' }} ariaHidden />
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Card.Body>test child</Card.Body>)
    expect($.contains('test child')).toBe(true)
  })
})
