import React from 'react'
import { shallow } from 'enzyme'

import { Navbar } from '../'

describe('<Navbar.Toggle.Bars />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Navbar.Toggle.Bars>
        Toggle bars text
      </Navbar.Toggle.Bars>
    )
    expect($.contains('Toggle bars text')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Navbar.Toggle.Bars className="test">_</Navbar.Toggle.Bars>)
    expect($.hasClass('c-navbar__toggle-bars test')).toBe(true)
  })
})
