import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Flag } from '../'

describe('<Flag.Body />', () => {
  it('takes a default className', () => {
    const $ = shallow(<Flag.Body />)
    expect($.hasClass(`${NAMESPACE}o-flag__body`)).toBe(true)
  })

  it('takes a defined className', () => {
    const $ = shallow(<Flag.Body className="test" />)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders the children', () => {
    const $ = shallow(
      <Flag.Body>
        <div className="test" />
      </Flag.Body>
    )
    expect($.contains(<div className="test" />)).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Flag.Body style={{ position: 'relative' }} ariaHidden="true">
        _
      </Flag.Body>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Flag.Body tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Flag.Body />)
    expect($.type()).toBe('div')
  })
})
