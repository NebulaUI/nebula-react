import React from 'react'
import { shallow, mount } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Navbar } from '../'

describe('<Navbar.Dropdown.Content />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Dropdown.Content className="test">_</Navbar.Dropdown.Content>)
    expect($.hasClass(`${NAMESPACE}c-navbar__dropdown`)).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-navbar__dropdown--south-west`)).toBe(false)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders to the right hand side', () => {
    const $ = shallow(<Navbar.Dropdown.Content southWest>-</Navbar.Dropdown.Content>)
    expect($.hasClass(`${NAMESPACE}c-navbar__dropdown--south-west`)).toBe(true)
  })

  it('renders children', () => {
    const child = <div />
    const $ = shallow(
      <Navbar.Dropdown.Content>
        <child />
      </Navbar.Dropdown.Content>
    )
    expect($.contains(<child />)).toBe(true)
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

  it('renders closed on initial mount', () => {
    const $ = mount(<Navbar.Dropdown.Content>_</Navbar.Dropdown.Content>)
    expect($.hasClass('is-open')).toBe(false)
  })

  it('renders open just after mounting allowing for CSS animation', () => {
    jest.useFakeTimers()
    const $ = mount(<Navbar.Dropdown.Content>_</Navbar.Dropdown.Content>)
    expect($.hasClass('is-open')).toBe(false)

    jest.runAllTimers()
    expect($.hasClass('is-open')).toBe(true)
  })
})
