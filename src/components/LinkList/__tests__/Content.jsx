import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { LinkList } from '../'

describe('<LinkList.Content />', () => {
  it('renders with the default className', () => {
    const $ = shallow(<LinkList.Content>_</LinkList.Content>)
    expect($.hasClass(`${NAMESPACE}c-link-list__content`)).toBe(true)
  })

  it('renders the user defined className', () => {
    const $ = shallow(<LinkList.Content className="test">_</LinkList.Content>)
    expect($.hasClass(`${NAMESPACE}c-link-list__content`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <LinkList.Content>
        <div className="child" />
      </LinkList.Content>
    )
    expect($.contains(<div className="child" />)).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<LinkList.Content tag="article">_</LinkList.Content>)
    expect($.type()).toBe('article')
  })

  it('renders an div by default', () => {
    const $ = shallow(<LinkList.Content>_</LinkList.Content>)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <LinkList.Content style={{ position: 'relative' }} ariaHidden>
        _
      </LinkList.Content>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })
})
