import React from 'react'
import { shallow, mount } from 'enzyme'
import simulant from 'jsdom-simulant'

import { Navbar } from '../'

describe('<Navbar.Dropdown.Wrapper />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Navbar.Dropdown.Wrapper>
        Dropdown.Wrapper text
      </Navbar.Dropdown.Wrapper>
    )
    expect($.contains('Dropdown.Wrapper text')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Dropdown.Wrapper className="test">_</Navbar.Dropdown.Wrapper>)
    expect($.hasClass('c-navbar__item test')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Navbar.Dropdown.Wrapper tag="article">_</Navbar.Dropdown.Wrapper>)
    expect($.type()).toBe('article')
  })

  it('renders a li by default', () => {
    const $ = shallow(<Navbar.Dropdown.Wrapper>-</Navbar.Dropdown.Wrapper>)
    expect($.type()).toBe('li')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Dropdown.Wrapper style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.Dropdown.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('can be opened and closed', () => {
    const $ = mount(
      <Navbar.Dropdown.Wrapper>
        <Navbar.Dropdown.Toggle>
          _
        </Navbar.Dropdown.Toggle>
      </Navbar.Dropdown.Wrapper>
    )
    expect($.hasClass('is-open')).toBe(false)
    expect($.html()).toMatch(/aria-expanded="false"/)

    $.find(Navbar.Dropdown.Toggle).simulate('click')
    expect($.hasClass('c-navbar__item')).toBe(true)
    expect($.hasClass('is-open')).toBe(true)
    expect($.html()).toMatch(/aria-expanded="true"/)
  })

  it('can be closed by clicking outside', () => {
    const $ = mount(
      <Navbar.Dropdown.Wrapper clickOutsideToClose>
        <Navbar.Dropdown.Toggle>
          _
        </Navbar.Dropdown.Toggle>
      </Navbar.Dropdown.Wrapper>
    )
    expect($.hasClass('is-open')).toBe(false)

    $.find(Navbar.Dropdown.Toggle).simulate('click')
    expect($.hasClass('is-open')).toBe(true)

    simulant.fire(document, 'click')
    expect($.hasClass('is-open')).toBe(false)
  })

  it('cannot be closed by clicking outside', () => {
    const $ = mount(
      <Navbar.Dropdown.Wrapper>
        <Navbar.Dropdown.Toggle>
          _
        </Navbar.Dropdown.Toggle>
      </Navbar.Dropdown.Wrapper>
    )
    expect($.hasClass('is-open')).toBe(false)

    $.find(Navbar.Dropdown.Toggle).simulate('click')
    expect($.hasClass('is-open')).toBe(true)

    simulant.fire(document, 'click')
    expect($.hasClass('is-open')).toBe(true)
  })

  it('does not render DropdownContent when closed', () => {
    const $ = mount(
      <Navbar.Dropdown.Wrapper>
        <Navbar.Dropdown.Toggle>
          _
        </Navbar.Dropdown.Toggle>
        <Navbar.Dropdown.Content>
          _
        </Navbar.Dropdown.Content>
      </Navbar.Dropdown.Wrapper>
    )
    expect($.find(Navbar.Dropdown.Content)).toHaveLength(0)

    $.find(Navbar.Dropdown.Toggle).simulate('click')
    expect($.find(Navbar.Dropdown.Content)).toHaveLength(1)
  })
})
