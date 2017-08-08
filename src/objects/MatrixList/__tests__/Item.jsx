import React from 'react'
import { shallow } from 'enzyme'

import { MatrixList } from '../'

describe('<MatrixList.Item />', () => {
  it('renders children', () => {
    const $ = shallow(
      <MatrixList.Item>
        <div className="child" />
      </MatrixList.Item>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<MatrixList.Item node="article" />)
    expect($.type()).toBe('article')
  })

  it('renders an li by default', () => {
    const $ = shallow(<MatrixList.Item />)
    expect($.type()).toBe('li')
  })

  it('renders the user defined className', () => {
    const $ = shallow(<MatrixList.Item className="test" />)
    expect($.hasClass('o-matrix-list__item test')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <MatrixList.Item style={{ position: 'relative' }} ariaHidden="true">
        _
      </MatrixList.Item>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
