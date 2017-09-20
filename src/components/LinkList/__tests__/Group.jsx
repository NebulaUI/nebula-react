import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'

import { LinkList } from '../'

describe('<LinkList.Group />', () => {
  it('renders children', () => {
    const $ = shallow(
      <LinkList.Group>
        <div className="child" />
      </LinkList.Group>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<LinkList.Group tag="article">_</LinkList.Group>)
    expect($.type()).toBe('article')
  })

  it('renders an ul by default', () => {
    const $ = shallow(<LinkList.Group>_</LinkList.Group>)
    expect($.type()).toBe('ul')
  })

  it('renders with the default className', () => {
    const $ = shallow(<LinkList.Group>_</LinkList.Group>)
    expect($.hasClass(`${NAMESPACE}c-link-list__group`)).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-link-list__group--divider`)).toBe(false)
  })

  it('renders the user defined className', () => {
    const $ = shallow(<LinkList.Group className="test">_</LinkList.Group>)
    expect($.hasClass(`${NAMESPACE}c-link-list__group`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders the appropriate className when the "divider" prop is set', () => {
    const $ = shallow(<LinkList.Group divider>Test child</LinkList.Group>)
    expect($.hasClass(`${NAMESPACE}c-link-list__group--divider`)).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <LinkList.Group style={{ position: 'relative' }} ariaHidden="true">
        _
      </LinkList.Group>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
