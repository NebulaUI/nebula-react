import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'

import { InlineList } from '../'

describe('<InlineList.Wrapper />', () => {
  it('takes a single spacing value', () => {
    const $ = shallow(<InlineList.Wrapper spacing="md" />)
    expect($.hasClass(`${NAMESPACE}o-inline-list ${NAMESPACE}o-inline-list--spaced-md`)).toBe(true)
  })

  it('takes a list of sizes', () => {
    const spacing = ['md', 'md@sm']
    const $ = shallow(<InlineList.Wrapper spacing={spacing} />)
    expect($.hasClass(`${NAMESPACE}o-inline-list ${NAMESPACE}o-inline-list--spaced-md ${NAMESPACE}o-inline-list--spaced-md@sm`)).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <InlineList.Wrapper>
        <div className="child" />
      </InlineList.Wrapper>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<InlineList.Wrapper tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a ul by default', () => {
    const $ = shallow(<InlineList.Wrapper />)
    expect($.type()).toBe('ul')
  })

  it('renders with the default className', () => {
    const $ = shallow(<InlineList.Wrapper />)
    expect($.hasClass(`${NAMESPACE}o-inline-list`)).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <InlineList.Wrapper style={{ position: 'relative' }} ariaHidden="true">
        _
      </InlineList.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders the user defined className', () => {
    const $ = shallow(<InlineList.Wrapper className="test" />)
    expect($.hasClass(`${NAMESPACE}o-inline-list ${NAMESPACE}test`)).toBe(true)
  })
})
