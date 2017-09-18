import React from 'react'
import { shallow } from 'enzyme'

import { UIList } from '../index'

const defaultProps = {
  spacing: 'md'
}

describe('<UIList.Wrapper />', () => {
  it('takes a single spacing value', () => {
    const props = {
      ...defaultProps,
      spacing: 'md'
    }
    const $ = shallow(<UIList.Wrapper {...props}>_</UIList.Wrapper>)
    expect($.hasClass('c-ui-list c-ui-list--spaced-md')).toBe(true)
  })

  it('takes a list of spacing values', () => {
    const spacing = ['md', 'md@sm']
    const props = {
      ...defaultProps,
      spacing
    }
    const $ = shallow(<UIList.Wrapper {...props}>_</UIList.Wrapper>)
    expect($.hasClass('c-ui-list c-ui-list--spaced-md c-ui-list--spaced-md@sm')).toBe(true)
  })

  it('renders without taking a spacing value', () => {
    const spacing = null
    const props = {
      ...defaultProps,
      spacing
    }
    const $ = shallow(<UIList.Wrapper {...props}>_</UIList.Wrapper>)
    expect($.hasClass('c-ui-list--spaced')).toBe(false)
  })

  it('renders children', () => {
    const $ = shallow(
      <UIList.Wrapper {...defaultProps}>
        <div className="child" />
      </UIList.Wrapper>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined tag type', () => {
    const props = {
      ...defaultProps,
      tag: 'article'
    }
    const $ = shallow(<UIList.Wrapper {...props}>_</UIList.Wrapper>)
    expect($.type()).toBe('article')
  })

  it('renders a ul by default', () => {
    const $ = shallow(<UIList.Wrapper {...defaultProps}>_</UIList.Wrapper>)
    expect($.type()).toBe('ul')
  })

  it('renders with the default className', () => {
    const $ = shallow(<UIList.Wrapper {...defaultProps}>_</UIList.Wrapper>)
    expect($.hasClass('c-ui-list')).toBe(true)
  })

  it('renders with attributes', () => {
    const props = {
      ...defaultProps,
      style: { position: 'relative' },
      ariaHidden: true
    }
    const $ = shallow(<UIList.Wrapper {...props}>_</UIList.Wrapper>)
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders the user defined className', () => {
    const props = {
      ...defaultProps,
      className: 'test'
    }
    const $ = shallow(<UIList.Wrapper {...props}>_</UIList.Wrapper>)
    expect($.hasClass('c-ui-list')).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })
})
