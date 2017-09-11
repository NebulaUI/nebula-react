import React from 'react'
import { shallow, mount } from 'enzyme'

import { ButtonDropdown } from '../'

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

  it('renders a defined tag type', () => {
    const $ = shallow(<ButtonDropdown.Wrapper {...defaultProps} tag="article">_</ButtonDropdown.Wrapper>)
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

  it('renders the correct aria-expanded prop', () => {
    const $ = shallow(<ButtonDropdown.Wrapper {...defaultProps}>_</ButtonDropdown.Wrapper>)
    expect($.prop('aria-expanded')).toBe(false)

    $.setState({
      isOpen: true
    })
    expect($.prop('aria-expanded')).toBe(true)
  })

  it('can be opened and closed, focusing on the element that initially opened the flyout', () => {
    const button = <button />
    const $ = mount(
      <ButtonDropdown.Wrapper {...defaultProps}>
        <ButtonDropdown.Toggle tag="div"><button /></ButtonDropdown.Toggle>
        <ButtonDropdown.Content>
          Child content
          <ButtonDropdown.Close><button /></ButtonDropdown.Close>
        </ButtonDropdown.Content>
      </ButtonDropdown.Wrapper>
    )

    expect($.hasClass('is-open')).toBe(false)
    $.find(ButtonDropdown.Toggle).childAt(0).simulate('click')
    expect($.hasClass('is-open')).toBe(true)

    $.find(ButtonDropdown.Content).find(ButtonDropdown.Close).simulate('click')
    expect($.hasClass('is-open')).toBe(false)
    expect($.find(ButtonDropdown.Toggle).childAt(0).node === document.activeElement).toBe(true)
  })


  it('can be closed by clicking on the outside', () => {
    const $ = mount(
      <ButtonDropdown.Wrapper clickOutsideToClose {...defaultProps}>
        <ButtonDropdown.Toggle />
        <ButtonDropdown.Content>Child content</ButtonDropdown.Content>
      </ButtonDropdown.Wrapper>
    )

    expect($.hasClass('is-open')).toBe(false)

    $.find(ButtonDropdown.Toggle).simulate('click')
    expect($.hasClass('is-open')).toBe(true)

    const evt = document.createEvent('HTMLEvents')
    evt.initEvent('click', false, true)
    window.dispatchEvent(evt)

    expect($.hasClass('is-open')).toBe(false)
  })

  it('can be rendered open on the initial mount', () => {
    const props = {
      ...defaultProps,
      defaultOpen: 'open'
    }
    const $ = mount(
      <ButtonDropdown.Wrapper {...props}>
        <ButtonDropdown.Toggle />
      </ButtonDropdown.Wrapper>
    )
    expect($.hasClass('is-open')).toBe(true)

    $.find(ButtonDropdown.Toggle).simulate('click')
    expect($.hasClass('is-open')).toBe(false)
  })

  it('can be externally controlled', () => {
    const props = {
      ...defaultProps,
      isOpen: 'open'
    }
    const $ = shallow(<ButtonDropdown.Wrapper {...props}>_</ButtonDropdown.Wrapper>)
    expect($.hasClass('is-open')).toBe(true)

    $.setProps({
      isOpen: 'closed'
    })

    expect($.hasClass('is-open')).toBe(false)
  })

  it('calls an optional callback prop when a change event occurs', () => {
    const mockOnButtonDropdownChange = jest.fn()
    const props = {
      ...defaultProps,
      onButtonDropdownChange: mockOnButtonDropdownChange,
      clickOutsideToClose: true,
      isOpen: 'open'
    }
    const $ = mount(
      <ButtonDropdown.Wrapper {...props}>
        <ButtonDropdown.Toggle />
        <ButtonDropdown.Content>Child content</ButtonDropdown.Content>
      </ButtonDropdown.Wrapper>
    )
    expect(mockOnButtonDropdownChange).not.toHaveBeenCalled()

    $.find(ButtonDropdown.Toggle).simulate('click')
    expect(mockOnButtonDropdownChange).toHaveBeenCalledWith(true)

    const evt = document.createEvent('HTMLEvents')
    evt.initEvent('click', false, true)
    window.dispatchEvent(evt)
    expect(mockOnButtonDropdownChange).toHaveBeenCalledTimes(2)
  })

  it('renders in a disabled state', () => {
    const props = {
      ...defaultProps,
      disabled: true
    }
    const $ = mount(
      <ButtonDropdown.Wrapper {...props}>
        <ButtonDropdown.Toggle />
      </ButtonDropdown.Wrapper>
    )

    expect($.find(ButtonDropdown.Toggle).html()).toMatch(/disabled/)
  })

  it('renders in a non disabled state', () => {
    const props = {
      ...defaultProps,
      disabled: false
    }
    const $ = mount(
      <ButtonDropdown.Wrapper {...props}>
        <ButtonDropdown.Toggle />
      </ButtonDropdown.Wrapper>
    )

    expect($.find(ButtonDropdown.Toggle).html()).not.toMatch(/disabled/)
  })

  it('renders closed when disabled, even when externally controlled', () => {
    const props = {
      ...defaultProps,
      isOpen: 'open',
      disabled: true
    }
    const $ = mount(
      <ButtonDropdown.Wrapper {...props}>
        <ButtonDropdown.Toggle />
      </ButtonDropdown.Wrapper>
    )

    expect($.hasClass('is-open')).toBe(false)
  })
})
