import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Card } from '../'

describe('<Card.Wrapper />', () => {
  it('passes in an optional className override', () => {
    const $ = shallow(<Card.Wrapper className="something else" />)
    expect($.hasClass(`${NAMESPACE}c-card`)).toBe(true)
    expect($.hasClass('something else')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Card.Wrapper tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Card.Wrapper />)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Card.Wrapper style={{ position: 'relative' }} ariaHidden />
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Card.Wrapper>test child</Card.Wrapper>)
    expect($.contains('test child')).toBe(true)
  })
})
