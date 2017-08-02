import React from 'react'
import { shallow } from 'enzyme'

import { Flag } from '../'

describe('<Flag.Body />', () => {
  it('renders the children', () => {
    const $ = shallow(
      <Flag.Body>
        <div className="test" />
      </Flag.Body>
    )
    expect($.contains(<div className="test" />)).toBe(true)
  })

  it('takes a defined className', () => {
    const $ = shallow(<Flag.Body className="test" />)
    expect($.prop('className')).toBe('o-flag__body test')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Flag.Body node="article" />)
    expect($.type()).toBe('article')
  })
})
