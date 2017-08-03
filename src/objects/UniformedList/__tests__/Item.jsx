import React from 'react'
import { shallow } from 'enzyme'

import { UniformedList } from '../'

describe('<UniformedList.Item />', () => {
  it('renders children', () => {
    const $ = shallow(
      <UniformedList.Item>
        <div className="child" />
      </UniformedList.Item>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<UniformedList.Item node="article" />)
    expect($.type()).toBe('article')
  })

  it('renders an li by default', () => {
    const $ = shallow(<UniformedList.Item />)
    expect($.type()).toBe('li')
  })

  it('renders with the default className', () => {
    const $ = shallow(<UniformedList.Item />)
    expect($.hasClass('o-uniformed-list__item')).toBe(true)
  })

  it('renders the user defined className', () => {
    const $ = shallow(<UniformedList.Item className="test" />)
    expect($.hasClass('o-uniformed-list__item test')).toBe(true)
  })
})
