import React from 'react'
import { shallow } from 'enzyme'

import { Navbar } from '../'
import { addEventListener, removeEventListener } from '../../../utils/window'

jest.mock('../../../utils/window')

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

  it('renders closed on the initial render', () => {
    const $ = shallow(<Navbar.Dropdown.Wrapper>_</Navbar.Dropdown.Wrapper>)
    expect($.hasClass('c-navbar__item is-open')).toBe(false)
  })

  it('can be opened and closed', () => {
    const $ = shallow(
      <Navbar.Dropdown.Wrapper>
        <Navbar.Dropdown.Toggle>_</Navbar.Dropdown.Toggle>
      </Navbar.Dropdown.Wrapper>
    )
    expect($.hasClass('c-navbar__item is-open')).toBe(false)

    $.find(Navbar.Dropdown.Toggle).prop('handleToggle')()
    expect($.hasClass('c-navbar__item is-open')).toBe(true)

    $.find(Navbar.Dropdown.Toggle).prop('handleToggle')()
    expect($.hasClass('c-navbar__item is-open')).toBe(false)
  })

  it('closes the dropdown when clicked outside', () => {
    // addEventListener.mockImplementation(() => )
  })
})
