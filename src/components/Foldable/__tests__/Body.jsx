import React from 'react'
import { shallow } from 'enzyme'

import { Foldable } from '../'

const defaultContext = {
  isOpen: false,
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

  it('renders children when open', () => {
    const context = {
      ...defaultContext,
      isOpen: true
    }
    const $ = shallow(<Foldable.Body isOpen>test child</Foldable.Body>, { context })
    expect($.contains('test child')).toBe(true)
  })

  it('does not render children when closed', () => {
    const context = {
      ...defaultContext,
      isOpen: false
    }
    const $ = shallow(<Foldable.Body>test child</Foldable.Body>, { context })
    expect($.contains('test child')).toBe(false)
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
