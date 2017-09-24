import React from 'react'
import { shallow, mount } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { ButtonDropdown } from '../'

const defaultContext = {
  handleButtonDropdownToggle: jest.fn()
}

describe('<ButtonDropdown.Toggle />', () => {
  it('renders children', () => {
    const child = <div />
    const $ = shallow(
      <ButtonDropdown.Toggle>
        <child />
      </ButtonDropdown.Toggle>
    , { context: defaultContext })
    expect($.contains(<child />)).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(
      <ButtonDropdown.Toggle className="test" />
      , { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-btn-dropdown__toggle`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(
      <ButtonDropdown.Toggle tag="article" />
      , { context: defaultContext })
    expect($.type()).toBe('article')
  })

  it('renders a button by default', () => {
    const $ = shallow(
      <ButtonDropdown.Toggle />
      , { context: defaultContext })
    expect($.type()).toBe('button')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <ButtonDropdown.Toggle style={{ position: 'relative' }} ariaHidden="true" />
      , { context: defaultContext })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders closed on the initial render', () => {
    const $ = shallow(<ButtonDropdown.Toggle />, { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-btn-dropdown__toggle is-open`)).toBe(false)
  })

  it('calls handleToggle when clicked, causing a blur event when a click and not keyboard input', () => {
    const mockHandleToggle = jest.fn()
    const context = {
      handleButtonDropdownToggle: mockHandleToggle
    }
    const $ = mount(
      <ButtonDropdown.Toggle />
      , { context })

    expect(mockHandleToggle).toHaveBeenCalledTimes(0)

    const mockBlur = jest.fn()
    $.instance().button.blur = mockBlur
    $.simulate('click', { detail: 1 })
    expect(mockHandleToggle).toHaveBeenCalledTimes(1)
    expect(mockBlur).toHaveBeenCalledTimes(1)

    $.simulate('click', { detail: 0 })
    expect(mockHandleToggle).toHaveBeenCalledTimes(2)
    expect(mockBlur).toHaveBeenCalledTimes(1)
  })
})
