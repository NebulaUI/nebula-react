import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Scroll } from '../'

describe('<Scroll />', () => {
  it('passes in an optional className override', () => {
    const $ = shallow(<Scroll className="something else">_</Scroll>)
    expect($.hasClass(`${NAMESPACE}c-scroll`)).toBe(true)
    expect($.hasClass('something else')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Scroll tag="article">_</Scroll>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Scroll>_</Scroll>)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Scroll style={{ position: 'relative' }} ariaHidden>
        _
      </Scroll>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Scroll>test child</Scroll>)
    expect($.contains('test child')).toBe(true)
  })

  it('renders a maxWidth and maxHeight', () => {
    const $ = shallow(<Scroll maxWidth="100px" maxHeight="500px">_</Scroll>)
    expect($.prop('style')).toEqual({
      maxWidth: '100px',
      maxHeight: '500px'
    })
  })
})
