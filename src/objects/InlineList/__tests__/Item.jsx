import React from 'react'
import { shallow } from 'enzyme'

import { InlineList } from '../'

describe('<InlineList.Item />', () => {
  it('renders children', () => {
    const $ = shallow(
      <InlineList.Item>
        <div className="child" />
      </InlineList.Item>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<InlineList.Item node="article" />)
    expect($.type()).toBe('article')
  })

  it('renders an li by default', () => {
    const $ = shallow(<InlineList.Item />)
    expect($.type()).toBe('li')
  })

  it('renders with the default className', () => {
    const $ = shallow(<InlineList.Item />)
    expect($.hasClass('o-inline-list__item')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <InlineList.Item style={{ position: 'relative' }} ariaHidden="true">
        _
      </InlineList.Item>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })


  it('renders the user defined className', () => {
    const $ = shallow(<InlineList.Item className="test" />)
    expect($.hasClass('o-inline-list__item test')).toBe(true)
  })
})
