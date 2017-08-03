import React from 'react'
import { shallow } from 'enzyme'

import { InlineList } from '../'

describe('<InlineList.Wrapper />', () => {
  it('takes a single spacing value', () => {
    const $ = shallow(<InlineList.Wrapper spacing="md" />)
    expect($.hasClass('o-inline-list o-inline-list--spaced-md')).toBe(true)
  })

  it('takes a list of sizes', () => {
    const spacing = ['sm', 'md@sm']
    const $ = shallow(<InlineList.Wrapper spacing={spacing} />)
    expect($.hasClass('o-inline-list o-inline-list--spaced-sm o-inline-list--spaced-md@sm')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <InlineList.Wrapper>
        <div className="child" />
      </InlineList.Wrapper>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<InlineList.Wrapper node="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a ul by default', () => {
    const $ = shallow(<InlineList.Wrapper />)
    expect($.type()).toBe('ul')
  })

  it('renders with the default className', () => {
    const $ = shallow(<InlineList.Wrapper />)
    expect($.hasClass('o-inline-list')).toBe(true)
  })

  it('renders the user defined className', () => {
    const $ = shallow(<InlineList.Wrapper className="test" />)
    expect($.hasClass('o-inline-list test')).toBe(true)
  })
})
