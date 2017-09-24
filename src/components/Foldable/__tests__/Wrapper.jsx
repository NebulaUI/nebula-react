import React from 'react'
import { shallow, mount } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Foldable } from '../'

describe('<Foldable.Wrapper />', () => {
  it('passes in an optional className', () => {
    const $ = shallow(<Foldable.Wrapper className="something else">_</Foldable.Wrapper>)
    expect($.hasClass(`${NAMESPACE}c-foldable`)).toBe(true)
    expect($.hasClass('something else')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Foldable.Wrapper tag="article">_</Foldable.Wrapper>)
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
    expect($.hasClass(`${NAMESPACE}c-foldable@max-lg`)).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-foldable`)).toBe(false)
  })

  it('renders with a border', () => {
    const $ = shallow(<Foldable.Wrapper bordered>_</Foldable.Wrapper>)
    expect($.hasClass(`${NAMESPACE}c-foldable ${NAMESPACE}c-foldable--bordered`)).toBe(true)

    const $$ = shallow(<Foldable.Wrapper>_</Foldable.Wrapper>)
    expect($$.hasClass(`${NAMESPACE}c-foldable ${NAMESPACE}c-foldable--bordered`)).toBe(false)
  })

  it('renders collapsed by default', () => {
    const $ = shallow(<Foldable.Wrapper breakpoint="max-lg">_</Foldable.Wrapper>)
    expect($.hasClass('is-open')).toBe(false)
  })

  it('renders expanded on initial mount', () => {
    const $ = shallow(<Foldable.Wrapper defaultOpen="open">_</Foldable.Wrapper>)
    expect($.hasClass('is-open')).toBe(true)
  })

  it('can be opened and closed', () => {
    const $ = mount(
      <Foldable.Wrapper>
        <Foldable.Header>_</Foldable.Header>
      </Foldable.Wrapper>
    )

    expect($.hasClass('is-open')).toBe(false)
    $.find(`.${NAMESPACE}c-foldable__toggle`).simulate('click')
    expect($.hasClass('is-open')).toBe(true)

    $.find(`.${NAMESPACE}c-foldable__toggle`).simulate('click')
    expect($.hasClass('is-open')).toBe(false)
  })

  it('can be controlled externally', () => {
    const mockOnChange = jest.fn()
    const $ = mount(
      <Foldable.Wrapper
        onChange={mockOnChange}
        open="open"
      >
        <Foldable.Header>_</Foldable.Header>
      </Foldable.Wrapper>
    )

    expect(mockOnChange).not.toHaveBeenCalled()
    expect($.hasClass('is-open')).toBe(true)

    $.setProps({
      open: 'closed'
    })
    expect(mockOnChange).not.toHaveBeenCalled()
    expect($.hasClass('is-open')).toBe(false)

    $.find(`.${NAMESPACE}c-foldable__toggle`).simulate('click')
    expect($.hasClass('is-open')).toBe(false)
    expect(mockOnChange).toHaveBeenCalledWith('open')

    $.setProps({
      open: 'open'
    })

    $.find(`.${NAMESPACE}c-foldable__toggle`).simulate('click')
    expect($.hasClass('is-open')).toBe(true)
    expect(mockOnChange).toHaveBeenCalledWith('closed')
  })

  it('renders closed when disabled even if controlled externally', () => {
    const $ = mount(
      <Foldable.Wrapper
        open="open"
        disabled
      >
        <Foldable.Header>_</Foldable.Header>
      </Foldable.Wrapper>
    )

    expect($.hasClass('is-open')).toBe(false)
  })

  it('sets correct aria attributes', () => {
    const $ = shallow(<Foldable.Wrapper open="closed">_</Foldable.Wrapper>)

    expect($.prop('aria-expanded')).toBe(false)

    $.setProps({
      open: 'open'
    })
    expect($.prop('aria-expanded')).toBe(true)
  })

  it('mounts with an optionally passed in id', () => {
    const $ = mount(
      <Foldable.Wrapper id="test-id">
        <Foldable.Header>_</Foldable.Header>
        <Foldable.Body>_</Foldable.Body>
      </Foldable.Wrapper>
    )

    expect($.find(`.${NAMESPACE}c-foldable__toggle`).prop('aria-controls')).toBe('test-id')
    expect($.find(`.${NAMESPACE}c-foldable__body`).prop('id')).toBe('test-id')
  })
})
