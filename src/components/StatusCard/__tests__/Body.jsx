import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { StatusCard } from '../'

describe('<StatusCard.Body />', () => {
  it('takes a className that gets appended', () => {
    const $ = shallow(<StatusCard.Body className="test">_</StatusCard.Body>)
    expect($.hasClass(`${NAMESPACE}c-status-card__body`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<StatusCard.Body tag="article">_</StatusCard.Body>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<StatusCard.Body>_</StatusCard.Body>)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <StatusCard.Body style={{ position: 'relative' }} ariaHidden>
        _
      </StatusCard.Body>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<StatusCard.Body>test child</StatusCard.Body>)
    expect($.contains('test child')).toBe(true)
  })
})
