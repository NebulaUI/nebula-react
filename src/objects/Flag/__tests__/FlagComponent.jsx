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

  it('renders a defined node type', () => {
    const $ = shallow(<Flag.Component node="article" />)
    expect($.type()).toBe('article')
  })
})
