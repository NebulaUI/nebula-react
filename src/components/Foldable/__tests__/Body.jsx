import React from 'react'
import { shallow } from 'enzyme'

import { Foldable } from '../'

describe('<Foldable.Body />', () => {
  it('passes in an optional className', () => {
    const $ = shallow(<Foldable.Body className="something else" />)
    expect($.hasClass('c-foldable__body something else')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Foldable.Body node="article">_</Foldable.Body>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Foldable.Body>-</Foldable.Body>)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Foldable.Body style={{ position: 'relative' }} ariaHidden="true">
        _
      </Foldable.Body>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders children', () => {
    const $ = shallow(<Foldable.Body>test child</Foldable.Body>)
    expect($.contains('test child')).toBe(true)
  })
})
