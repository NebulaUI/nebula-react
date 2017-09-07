import React from 'react'
import { shallow } from 'enzyme'

import { Foldable } from '../'

const defaultContext = {
  isOpen: true,
  foldableId: '123'
}

describe('<Foldable.Body />', () => {
  it('passes in an optional className', () => {
    const $ = shallow(<Foldable.Body className="something else">_</Foldable.Body>, { context: defaultContext })
    expect($.hasClass('c-foldable__body something else')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Foldable.Body node="article">_</Foldable.Body>, { context: defaultContext })
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Foldable.Body>_</Foldable.Body>, { context: defaultContext })
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Foldable.Body style={{ position: 'relative' }} ariaHidden="true">
        _
      </Foldable.Body>
      , { context: defaultContext })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders with aria-hidden set to false when expanded', () => {
    const context = {
      ...defaultContext,
      isOpen: true
    }
    const $ = shallow(<Foldable.Body isOpen>_</Foldable.Body>, { context })
    expect($.prop('aria-hidden')).toBe(false)
  })

  it('renders with aria-hidden set to true when collapsed', () => {
    const context = {
      ...defaultContext,
      isOpen: false
    }
    const $ = shallow(<Foldable.Body>_</Foldable.Body>, { context })
    expect($.prop('aria-hidden')).toBe(true)
  })

  it('renders with an id passed via context', () => {
    const context = {
      ...defaultContext,
      foldableId: 'test-id'
    }
    const $ = shallow(<Foldable.Body>_</Foldable.Body>, { context })
    expect($.prop('id')).toBe('test-id')
  })
})
