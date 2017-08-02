import React from 'react'
import { shallow } from 'enzyme'

import { Flag } from '../'

describe('<FlagWrapper />', () => {
  it('renders the children', () => {
    const $ = shallow(
      <Flag.Wrapper>
        <div className="test" />
      </Flag.Wrapper>
    )
    expect($.contains(<div className="test" />)).toBe(true)
  })

  it('renders with a breakpoint', () => {
    const $ = shallow(<Flag.Wrapper breakpoint="md" />)
    expect($.prop('className')).toBe('o-flag@md')
  })

  it('renders with a gutter', () => {
    const $ = shallow(<Flag.Wrapper gutter="md" />)
    expect($.prop('className')).toBe('o-flag o-flag--gutter-md')
  })

  it('renders reverse', () => {
    const $ = shallow(<Flag.Wrapper reverse />)
    expect($.prop('className')).toBe('o-flag o-flag--reverse')
  })

  it('renders content vertically aligned to the top', () => {
    const $ = shallow(<Flag.Wrapper align="top" />)
    expect($.prop('className')).toBe('o-flag o-flag--top')
  })

  it('renders content vertically aligned to the bottom', () => {
    const $ = shallow(<Flag.Wrapper align="bottom" />)
    expect($.prop('className')).toBe('o-flag o-flag--bottom')
  })

  it('takes a defined className', () => {
    const $ = shallow(<Flag.Wrapper className="test" />)
    expect($.prop('className')).toBe('o-flag test')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Flag.Wrapper node="article" />)
    expect($.type()).toBe('article')
  })
})
