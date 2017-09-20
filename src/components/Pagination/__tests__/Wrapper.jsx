import React from 'react'
import { shallow, mount } from 'enzyme'

import { Pagination } from '../'

describe('<Pagination.Wrapper />', () => {
  it('renders with an optional className', () => {
    const $ = shallow(<Pagination.Wrapper className="test">_</Pagination.Wrapper>)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Pagination.Wrapper style={{ position: 'relative' }}>
        _
      </Pagination.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
  })

  it('renders the aria-label attr with a default value', () => {
    const $ = mount(<Pagination.Wrapper aria-label="Test">_</Pagination.Wrapper>)
    expect($.prop('aria-label')).toBe('Test')
  })

  it('renders the aria-label with a prop passed in as an override', () => {
    const $ = mount(<Pagination.Wrapper aria-label="Test" ariaLabel="Test Override">_</Pagination.Wrapper>)
    expect($.prop('aria-label')).toBe('Test')
    expect($.prop('ariaLabel')).toBe('Test Override')
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Pagination.Wrapper tag="article">_</Pagination.Wrapper>)
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
})
