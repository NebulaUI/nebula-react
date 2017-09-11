import React from 'react'
import { shallow } from 'enzyme'

import { Navbar } from '../'

describe('<Navbar.Dropdown.Content />', () => {
  it('renders children', () => {
    const child = <div />
    const $ = shallow(
      <Navbar.Dropdown.Content>
        <child />
      </Navbar.Dropdown.Content>
    )
    expect($.contains(<child />)).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Dropdown.Content className="test">_</Navbar.Dropdown.Content>)
    expect($.hasClass('c-navbar__dropdown test')).toBe(true)
    expect($.hasClass('c-navbar__dropdown--south-west')).toBe(false)
  })

  it('renders to the right hand side', () => {
    const $ = shallow(<Navbar.Dropdown.Content southWest>-</Navbar.Dropdown.Content>)
    expect($.hasClass('c-navbar__dropdown--south-west')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Navbar.Dropdown.Content tag="article">_</Navbar.Dropdown.Content>)
    expect($.type()).toBe('article')
  })

  it('renders a ul by default', () => {
    const $ = shallow(<Navbar.Dropdown.Content>-</Navbar.Dropdown.Content>)
    expect($.type()).toBe('ul')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Dropdown.Content style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.Dropdown.Content>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
