import React from 'react'
import { shallow, mount } from 'enzyme'

import { Foldable } from '../'
import FoldableBody from "../Body";

describe('<Foldable.Wrapper />', () => {
  it('passes in an optional className', () => {
    const $ = shallow(<Foldable.Wrapper className="something else">_</Foldable.Wrapper>)
    expect($.hasClass('c-foldable something else')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Foldable.Wrapper node="article">_</Foldable.Wrapper>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Foldable.Wrapper>_</Foldable.Wrapper>)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Foldable.Wrapper style={{ position: 'relative' }} ariaHidden="true">
        _
      </Foldable.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders children', () => {
    const $ = shallow(<Foldable.Wrapper>test child</Foldable.Wrapper>)
    expect($.contains('test child')).toBe(true)
  })

  it('renders with a breakpoint', () => {
    const $ = shallow(<Foldable.Wrapper breakpoint="max-lg">_</Foldable.Wrapper>)
    expect($.hasClass('c-foldable@max-lg')).toBe(true)
    expect($.hasClass('c-foldable')).toBe(false)
  })

  it('renders with a border', () => {
    const $ = shallow(<Foldable.Wrapper bordered>_</Foldable.Wrapper>)
    expect($.hasClass('c-foldable c-foldable--bordered')).toBe(true)

    const $$ = shallow(<Foldable.Wrapper>_</Foldable.Wrapper>)
    expect($$.hasClass('c-foldable c-foldable--bordered')).toBe(false)
  })

  it('renders closed by default', () => {
    const $ = shallow(<Foldable.Wrapper breakpoint="max-lg">_</Foldable.Wrapper>)
    expect($.hasClass('is-open')).toBe(false)
  })

  it('renders open on initial mount', () => {
    const $ = shallow(<Foldable.Wrapper openOnMount>_</Foldable.Wrapper>)
    expect($.hasClass('is-open')).toBe(true)
  })

  it('can be opened and closed', () => {
    const $ = mount(
      <Foldable.Wrapper>
        <Foldable.Header>_</Foldable.Header>
        <Foldable.Body>Children</Foldable.Body>
      </Foldable.Wrapper>
    )

    expect($.hasClass('is-open')).toBe(false)

    $.find('.c-foldable__toggle').simulate('click')
    expect($.hasClass('is-open')).toBe(true)
    expect($.find('.c-foldable__body').text()).toBe('Children')

    $.find('.c-foldable__toggle').simulate('click')
    expect($.hasClass('is-open')).toBe(false)
    expect($.find('.c-foldable__body').text()).toBe('')
  })
})
