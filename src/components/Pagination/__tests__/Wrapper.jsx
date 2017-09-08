import React from 'react'
import { shallow } from 'enzyme'

import { Pagination } from '../'

describe('<Pagination.Wrapper />', () => {
  it('passes in an optional className', () => {
    const $ = shallow(<Pagination.Wrapper className="test">_</Pagination.Wrapper>)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Pagination.Wrapper style={{ position: 'relative' }} ariaHidden>
        _
      </Pagination.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders the aria-label with an override passed in as a prop', () => {
    const $ = shallow(<Pagination.Wrapper style={{ position: 'relative' }} ariaHidden="test">_</Pagination.Wrapper>)
    expect($.prop('ariaHidden')).toBe('test')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Pagination.Wrapper node="article">_</Pagination.Wrapper>)
    expect($.type()).toBe('article')
  })

  it('renders a nav by default', () => {
    const $ = shallow(<Pagination.Wrapper>_</Pagination.Wrapper>)
    expect($.type()).toBe('nav')
  })

  it('renders children', () => {
    const $ = shallow(
      <Pagination.Wrapper>
        Test
      </Pagination.Wrapper>
    )
    expect($.contains('Test')).toBe(true)
  })

  it('renders a nav by default', () => {
    const $ = shallow(<Pagination.Wrapper>_</Pagination.Wrapper>)
    expect($.type()).toBe('nav')
  })
})
