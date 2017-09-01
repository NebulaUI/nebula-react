import React from 'react'
import { shallow, mount } from 'enzyme'

import { addEListener, removeEListener } from '../../../utils/window'

import { ButtonDropdown } from '../'

jest.mock('../../../utils/window')

const defaultProps = {
  togglePosition: 'left'
}

describe('<ButtonDropdown.Wrapper />', () => {
  it('renders children', () => {
    const $ = shallow(
      <ButtonDropdown.Wrapper {...defaultProps}>
        Test child
      </ButtonDropdown.Wrapper>
    )
    expect($.contains('Test child')).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<ButtonDropdown.Wrapper {...defaultProps} className="test">_</ButtonDropdown.Wrapper>)
    expect($.hasClass('c-btn-dropdown c-btn-dropdown--toggle-left test')).toBe(true)
  })

  it('can be configured with a left direction', () => {
    const $ = shallow(
      <ButtonDropdown.Wrapper togglePosition="left">_</ButtonDropdown.Wrapper>
    )
    expect($.hasClass('c-btn-dropdown--toggle-left')).toBe(true)
  })

  it('can be configured with a right direction', () => {
    const $ = shallow(
      <ButtonDropdown.Wrapper togglePosition="right">_</ButtonDropdown.Wrapper>
    )
    expect($.hasClass('c-btn-dropdown--toggle-right')).toBe(true)
  })

  it('can be configured to full width', () => {
    const $ = shallow(
      <ButtonDropdown.Wrapper {...defaultProps} fullWidth>_</ButtonDropdown.Wrapper>
    )
    expect($.hasClass('c-btn-dropdown--full')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<ButtonDropdown.Wrapper {...defaultProps} node="article">_</ButtonDropdown.Wrapper>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<ButtonDropdown.Wrapper {...defaultProps}>_</ButtonDropdown.Wrapper>)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <ButtonDropdown.Wrapper {...defaultProps} style={{ position: 'relative' }} ariaHidden="true">
        _
      </ButtonDropdown.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders closed on the initial render', () => {
    const $ = shallow(<ButtonDropdown.Wrapper {...defaultProps}>_</ButtonDropdown.Wrapper>)
    expect($.hasClass('is-open')).toBe(false)
  })

  it('can be opened and closed via the toggle', () => {
    const mockOpen = jest.fn()
    const $ = shallow(
      <ButtonDropdown.Wrapper {...defaultProps}>
        <ButtonDropdown.Toggle handleToggle={mockOpen}>_</ButtonDropdown.Toggle>
        <ButtonDropdown.Content>_</ButtonDropdown.Content>
      </ButtonDropdown.Wrapper>
    )
    expect($.hasClass('is-open')).toBe(false)

    $.find(ButtonDropdown.Toggle).prop('handleToggle')()
    expect($.hasClass('is-open')).toBe(true)
  })

  it('adds a click handler to the window when mounted and removes it when it unmounts', () => {
    const mockAddEventListener = jest.fn()
    const mockRemoveEventListener = jest.fn()
    addEListener.mockImplementation(mockAddEventListener)
    removeEListener.mockImplementation(mockRemoveEventListener)

    const $ = mount(<ButtonDropdown.Wrapper {...defaultProps}>_</ButtonDropdown.Wrapper>)
    const handleClickOutside = $.instance().handleClickOutside
    expect(mockAddEventListener).toHaveBeenCalledWith('mousedown', handleClickOutside)
    $.unmount()
    expect(mockRemoveEventListener).toHaveBeenCalledWith('mousedown', handleClickOutside)
  })

  it('closes when clicked outside', () => {
    const $ = mount(<ButtonDropdown.Wrapper {...defaultProps}>_</ButtonDropdown.Wrapper>)
    $.setState({
      isOpen: true
    })
    expect($.hasClass('is-open')).toBe(true)
    $.instance().handleClickOutside({
      target: 'foo'
    })
    expect($.hasClass('is-open')).toBe(false)
  })
})
