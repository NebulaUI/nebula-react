import React from 'react'
import { shallow } from 'enzyme'

import { Foldable } from '../'

describe('<Foldable.Header />', () => {
  it('passes in an optional className', () => {
    const $ = shallow(<Foldable.Header className="something else">_</Foldable.Header>)
    expect($.hasClass('c-foldable__header something else')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Foldable.Header node="article">_</Foldable.Header>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Foldable.Header>_</Foldable.Header>)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Foldable.Header style={{ position: 'relative' }} ariaHidden="true">
        _
      </Foldable.Header>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders children', () => {
    const $ = shallow(<Foldable.Header>test child</Foldable.Header>)
    expect($.contains('test child')).toBe(true)
  })

  it('renders with padding', () => {
    const $ = shallow(<Foldable.Header padding>_</Foldable.Header>)
    expect($.hasClass('c-foldable__header c-foldable__header--padding')).toBe(true)

    const $$ = shallow(<Foldable.Header>_</Foldable.Header>)
    expect($$.hasClass('c-foldable__header c-foldable__header--padding')).toBe(false)
  })

  it('renders toggle button that calls callback when clicked', () => {
    const cbMock = jest.fn()
    const $ = shallow(<Foldable.Header toggleOpen={cbMock}>_</Foldable.Header>)
    expect(cbMock).toHaveBeenCalledTimes(0)
    expect($.childAt(0).hasClass('c-foldable__toggle')).toBe(true)

    $.childAt(0).simulate('click')
    expect(cbMock).toHaveBeenCalledTimes(1)
  })
})
