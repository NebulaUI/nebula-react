import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { UIList } from '../index'

describe('<UIList.Item />', () => {
  it('renders with the default className', () => {
    const $ = shallow(<UIList.Item />)
    expect($.hasClass(`${NAMESPACE}c-ui-list__item`)).toBe(true)
  })

  it('renders the user defined className', () => {
    const $ = shallow(<UIList.Item className="test" />)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <UIList.Item>
        <div className="child" />
      </UIList.Item>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<UIList.Item tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders an li by default', () => {
    const $ = shallow(<UIList.Item />)
    expect($.type()).toBe('li')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <UIList.Item style={{ position: 'relative' }} ariaHidden="true">
        _
      </UIList.Item>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
