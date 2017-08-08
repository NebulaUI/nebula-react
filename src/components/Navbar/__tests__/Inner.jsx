import React from 'react'
import { shallow } from 'enzyme'

import { Navbar } from '../'

describe('<Navbar.Inner />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Navbar.Inner>
        Inner text
      </Navbar.Inner>
    )
    expect($.contains('Inner text')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Inner className="test">_</Navbar.Inner>)
    expect($.hasClass('c-navbar__inner test')).toBe(true)
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

  it('renders closed on the initial render', () => {
    const $ = shallow(<Navbar.Inner>_</Navbar.Inner>)
    expect($.hasClass('is-open')).toBe(false)
  })

  it('can be opened and closed', () => {
    const $ = shallow(
      <Navbar.Inner>
        <Navbar.Overlay>_</Navbar.Overlay>
        <Navbar.Wrap>_</Navbar.Wrap>
      </Navbar.Inner>
    )
    expect($.hasClass('is-open')).toBe(false)

    $.find(Navbar.Overlay).prop('handleToggle')()
    expect($.hasClass('is-open')).toBe(true)

    $.find(Navbar.Wrap).prop('handleToggle')()
    expect($.hasClass('is-open')).toBe(false)
  })
})
