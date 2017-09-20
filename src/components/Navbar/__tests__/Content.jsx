import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Navbar } from '../'

describe('<Navbar.Content />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Content className="test">_</Navbar.Content>)
    expect($.hasClass(`${NAMESPACE}c-navbar__content`)).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-navbar__content--keep-at-top`)).toBe(false)
    expect($.hasClass(`${NAMESPACE}c-navbar__content--right`)).toBe(false)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders at the top when collapsed', () => {
    const $ = shallow(<Navbar.Content keepAtTop>-</Navbar.Content>)
    expect($.hasClass(`${NAMESPACE}c-navbar__content--keep-at-top`)).toBe(true)
  })

  it('renders to the right hand side', () => {
    const $ = shallow(<Navbar.Content right>-</Navbar.Content>)
    expect($.hasClass(`${NAMESPACE}c-navbar__content--right`)).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <Navbar.Content>
        Content text
      </Navbar.Content>
    )
    expect($.contains('Content text')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Navbar.Content tag="article">_</Navbar.Content>)
    expect($.type()).toBe('article')
  })

  it('renders a ul by default', () => {
    const $ = shallow(<Navbar.Content>-</Navbar.Content>)
    expect($.type()).toBe('ul')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Content style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.Content>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
