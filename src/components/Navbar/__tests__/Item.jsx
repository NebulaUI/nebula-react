import React from 'react'
import { shallow } from 'enzyme'

import { Navbar } from '../'

describe('<Navbar.Item />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Navbar.Item>
        Item text
      </Navbar.Item>
    )
    expect($.contains('Item text')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Navbar.Item tag="article">_</Navbar.Item>)
    expect($.type()).toBe('article')
  })

  it('renders a li by default', () => {
    const $ = shallow(<Navbar.Item>-</Navbar.Item>)
    expect($.type()).toBe('li')
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Item className="test">_</Navbar.Item>)
    expect($.hasClass('c-navbar__item test')).toBe(true)
    expect($.hasClass('c-navbar__item--reset-line-height')).toBe(false)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Item style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.Item>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders with line-height reset', () => {
    const $ = shallow(<Navbar.Item resetLineHeight>-</Navbar.Item>)
    expect($.hasClass('c-navbar__item--reset-line-height')).toBe(true)
  })
})
