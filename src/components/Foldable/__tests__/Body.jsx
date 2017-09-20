import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Foldable } from '../'

const defaultContext = {
  isFoldableOpen: true,
  foldableId: '123'
}

describe('<Foldable.Body />', () => {
  it('passes in an optional className', () => {
    const $ = shallow(<Foldable.Body className="something else">_</Foldable.Body>, { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-foldable__body`)).toBe(true)
    expect($.hasClass('something else')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Foldable.Body tag="article">_</Foldable.Body>, { context: defaultContext })
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
      isFoldableOpen: true
    }
    const $ = shallow(<Foldable.Body isOpen>_</Foldable.Body>, { context })
    expect($.prop('aria-hidden')).toBe(false)
  })

  it('renders with aria-hidden set to true when collapsed', () => {
    const context = {
      ...defaultContext,
      isFoldableOpen: false
    }
    const $ = shallow(<Foldable.Body>_</Foldable.Body>, { context })
    expect($.prop('aria-hidden')).toBe(true)
  })

  it('renders children', () => {
    const context = {
      ...defaultContext
    }
    const $ = shallow(<Foldable.Body>test child</Foldable.Body>, { context })
    expect($.contains('test child')).toBe(true)
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
