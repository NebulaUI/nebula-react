import React from 'react'
import { shallow } from 'enzyme'

import { Flag } from '../'

describe('<Flag.Component />', () => {
  it('renders the children', () => {
    const $ = shallow(
      <Flag.Component>
        <div className="test" />
      </Flag.Component>
    )
    expect($.contains(<div className="test" />)).toBe(true)
  })

  it('renders without wrapping whitespace', () => {
    const $ = shallow(<Flag.Component nowrap />)
    expect($.hasClass('o-flag__component o-flag__component--nowrap')).toBe(true)
  })

  it('takes a defined className', () => {
    const $ = shallow(<Flag.Component className="test" />)
    expect($.hasClass('o-flag__component test')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Flag.Component style={{ position: 'relative' }} ariaHidden="true">
        _
      </Flag.Component>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Flag.Component tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Flag.Component />)
    expect($.type()).toBe('div')
  })
})
