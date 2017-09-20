import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Card } from '../'

describe('<Card />', () => {
  it('passes in an optional className override', () => {
    const $ = shallow(<Card className="something else" />)
    expect($.hasClass(`${NAMESPACE}c-card`)).toBe(true)
    expect($.hasClass('something else')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Card tag="article">_</Card>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Card>-</Card>)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Card style={{ position: 'relative' }} ariaHidden="true">
        _
      </Card>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders children', () => {
    const $ = shallow(<Card>test child</Card>)
    expect($.contains('test child')).toBe(true)
  })
})
