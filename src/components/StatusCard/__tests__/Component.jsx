import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { StatusCard } from '../'

describe('<StatusCard.Component />', () => {
  it('takes a className that gets appended', () => {
    const $ = shallow(<StatusCard.Component className="test">_</StatusCard.Component>)
    expect($.hasClass(`${NAMESPACE}c-status-card__component`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<StatusCard.Component tag="article">_</StatusCard.Component>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<StatusCard.Component>_</StatusCard.Component>)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <StatusCard.Component style={{ position: 'relative' }} ariaHidden>
        _
      </StatusCard.Component>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<StatusCard.Component>test child</StatusCard.Component>)
    expect($.contains('test child')).toBe(true)
  })
})
