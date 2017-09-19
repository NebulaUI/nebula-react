import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'

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

  it('renders a defined tag type', () => {
    const $ = shallow(<UniformedList.Item tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders an li by default', () => {
    const $ = shallow(<UniformedList.Item />)
    expect($.type()).toBe('li')
  })

  it('renders the user defined className', () => {
    const $ = shallow(<UniformedList.Item className="test" />)
    expect($.hasClass(`${NAMESPACE}o-uniformed-list__item ${NAMESPACE}test`)).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <UniformedList.Item style={{ position: 'relative' }} ariaHidden="true">
        _
      </UniformedList.Item>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
