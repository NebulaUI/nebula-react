import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Navbar } from '../'

describe('<Navbar.Inner />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Inner className="test">_</Navbar.Inner>)
    expect($.hasClass(`${NAMESPACE}c-navbar__wrap`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(
      <Navbar.Inner>
        Inner text
      </Navbar.Inner>
    )
    expect($.contains('Inner text')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Navbar.Inner style={{ position: 'relative' }} ariaHidden="true">
        _
      </Navbar.Inner>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Navbar.Inner tag="article">_</Navbar.Inner>)
    expect($.type()).toBe('article')
  })

  it('renders a nav by default', () => {
    const $ = shallow(<Navbar.Inner>-</Navbar.Inner>)
    expect($.type()).toBe('nav')
  })
})
