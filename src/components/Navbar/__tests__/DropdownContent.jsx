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
  })
})
