import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { MatrixList } from '../'

describe('<MatrixList.Item />', () => {
  it('renders the default className', () => {
    const $ = shallow(<MatrixList.Item />)
    expect($.hasClass(`${NAMESPACE}o-matrix-list__item`)).toBe(true)
  })

  it('renders the user defined className', () => {
    const $ = shallow(<MatrixList.Item className="test" />)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <MatrixList.Item>
        <div className="child" />
      </MatrixList.Item>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<MatrixList.Item tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders an li by default', () => {
    const $ = shallow(<MatrixList.Item />)
    expect($.type()).toBe('li')
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
