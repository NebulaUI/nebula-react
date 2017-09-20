import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'

import { LinkList } from '../'

describe('<LinkList.Wrapper />', () => {
  it('renders with the default className', () => {
    const $ = shallow(<LinkList.Wrapper>_</LinkList.Wrapper>)
    expect($.hasClass(`${NAMESPACE}c-link-list`)).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-link-list--spaced`)).toBe(false)
  })

  it('takes a single spacing value', () => {
    const $ = shallow(<LinkList.Wrapper spacing="md">_</LinkList.Wrapper>)
    expect($.hasClass(`${NAMESPACE}c-link-list ${NAMESPACE}c-link-list--spaced-md`)).toBe(true)
  })

  it('takes a list of sizes', () => {
    const spacing = ['md', 'md@sm']
    const $ = shallow(<LinkList.Wrapper spacing={spacing}>_</LinkList.Wrapper>)
    expect($.hasClass(`${NAMESPACE}c-link-list ${NAMESPACE}c-link-list--spaced-md ${NAMESPACE}c-link-list--spaced-md@sm`)).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <LinkList.Wrapper>
        <div className="child" />
      </LinkList.Wrapper>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<LinkList.Wrapper tag="article">_</LinkList.Wrapper>)
    expect($.type()).toBe('article')
  })

  it('renders a ul by default', () => {
    const $ = shallow(<LinkList.Wrapper>_</LinkList.Wrapper>)
    expect($.type()).toBe('ul')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <LinkList.Wrapper style={{ position: 'relative' }} ariaHidden="true">
        _
      </LinkList.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders the user defined className', () => {
    const $ = shallow(<LinkList.Wrapper className="test">_</LinkList.Wrapper>)
    expect($.hasClass(`${NAMESPACE}c-link-list ${NAMESPACE}test`)).toBe(true)
  })
})
