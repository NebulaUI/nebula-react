import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { BareList } from '../'

describe('<BareList.Item />', () => {
  it('renders with the default className', () => {
    const $ = shallow(<BareList.Item />)
    expect($.hasClass(`${NAMESPACE}o-bare-list__item`)).toBe(true)
  })

  it('renders the user defined className', () => {
    const $ = shallow(<BareList.Item className="test" />)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <BareList.Item>
        <div className="child" />
      </BareList.Item>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<BareList.Item tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders an li by default', () => {
    const $ = shallow(<BareList.Item />)
    expect($.type()).toBe('li')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <BareList.Item style={{ position: 'relative' }} ariaHidden="true">
        _
      </BareList.Item>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
