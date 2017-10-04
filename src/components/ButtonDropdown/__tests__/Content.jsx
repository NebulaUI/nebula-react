import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { ButtonDropdown } from '../'

const defaultContext = {
  buttonDropdownOpen: true
}

describe('<ButtonDropdown.Content />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<ButtonDropdown.Content className="test">_</ButtonDropdown.Content>, { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-btn-dropdown__content`)).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-btn-dropdown__content--transition`)).toBe(false)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<ButtonDropdown.Content tag="article">_</ButtonDropdown.Content>, { context: defaultContext })
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(
      <ButtonDropdown.Content>_</ButtonDropdown.Content>,
      { context: defaultContext })
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <ButtonDropdown.Content style={{ position: 'relative' }} ariaHidden="true">
        _
      </ButtonDropdown.Content>
    , { context: defaultContext })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders children when open', () => {
    const context = { buttonDropdownOpen: true }
    const $ = shallow(<ButtonDropdown.Content>Test child</ButtonDropdown.Content>, { context })
    expect($.contains('Test child')).toBe(true)
  })

  it('does not render children when closed', () => {
    const context = { buttonDropdownOpen: false }
    const $ = shallow(<ButtonDropdown.Content>Test child</ButtonDropdown.Content>, { context })
    expect($.contains('Test child')).toBe(false)
  })

  it('renders with a transition', () => {
    const $ = shallow(
      <ButtonDropdown.Content transition>_</ButtonDropdown.Content>,
      { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-btn-dropdown__content`)).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-btn-dropdown__content--transition`)).toBe(true)
  })
})
