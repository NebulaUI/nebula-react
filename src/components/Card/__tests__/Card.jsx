import React from 'react'
import { shallow } from 'enzyme'

import { Card } from '../'

describe('<Card />', () => {
  // it.only('passes in an optional className', () => {
  //   const $ = shallow(<Card className="c-card" />)
  //   expect($.hasClass('c-card test')).toBe(true)
  // })

  it('renders a defined node type', () => {
    const $ = shallow(<Card node="article">_</Card>)
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
})
