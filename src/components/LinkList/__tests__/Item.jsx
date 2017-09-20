import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { LinkList } from '../'

describe('<LinkList.Item />', () => {
  it('renders with the default className', () => {
    const $ = shallow(<LinkList.Item>_</LinkList.Item>)
    expect($.hasClass(`${NAMESPACE}c-link-list__item`)).toBe(true)
  })

  it('renders the user defined className', () => {
    const $ = shallow(<LinkList.Item className="test">_</LinkList.Item>)
    expect($.hasClass(`${NAMESPACE}c-link-list__item`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <LinkList.Item>
        <div className="child" />
      </LinkList.Item>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<LinkList.Item tag="article">_</LinkList.Item>)
    expect($.type()).toBe('article')
  })

  it('renders an li by default', () => {
    const $ = shallow(<LinkList.Item>_</LinkList.Item>)
    expect($.type()).toBe('li')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <LinkList.Item style={{ position: 'relative' }} ariaHidden="true">
        _
      </LinkList.Item>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
