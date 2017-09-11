import React from 'react'
import { shallow } from 'enzyme'

import { Foldable } from '../'

const defaultContext = {
  toggleFoldableOpen: jest.fn(),
  foldableId: '123'
}

describe('<Foldable.Header />', () => {
  it('passes in an optional className', () => {
    const $ = shallow(
      <Foldable.Header className="something else">_</Foldable.Header>
    , { context: defaultContext })
    expect($.hasClass('c-foldable__header something else')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(
      <Foldable.Header tag="article">_</Foldable.Header>
    , { context: defaultContext })
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Foldable.Header>_</Foldable.Header>, { context: defaultContext })
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Foldable.Header style={{ position: 'relative' }} ariaHidden="true">
        _
      </Foldable.Header>
    , { context: defaultContext })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders children', () => {
    const $ = shallow(<Foldable.Header>test child</Foldable.Header>, { context: defaultContext })
    expect($.contains('test child')).toBe(true)
  })

  it('renders with padding', () => {
    const $ = shallow(<Foldable.Header padding>_</Foldable.Header>, { context: defaultContext })
    expect($.hasClass('c-foldable__header c-foldable__header--padding')).toBe(true)

    const $$ = shallow(<Foldable.Header>_</Foldable.Header>, { context: defaultContext })
    expect($$.hasClass('c-foldable__header c-foldable__header--padding')).toBe(false)
  })

  it('renders toggle button that calls callback when clicked', () => {
    const toggleOpenMock = jest.fn()
    const context = {
      ...defaultContext,
      toggleFoldableOpen: toggleOpenMock
    }
    const $ = shallow(<Foldable.Header>_</Foldable.Header>, { context })
    expect(toggleOpenMock).toHaveBeenCalledTimes(0)
    expect($.childAt(0).hasClass('c-foldable__toggle')).toBe(true)

    $.childAt(0).simulate('click')
    expect(toggleOpenMock).toHaveBeenCalledTimes(1)
  })

  it('maps foldableId to aria-controls on the button', () => {
    const context = {
      ...defaultContext,
      foldableId: 'test-id'
    }
    const $ = shallow(<Foldable.Header>_</Foldable.Header>, { context })
    expect($.childAt(0).prop('aria-controls')).toBe('test-id')
  })
})
