import React from 'react'
import { shallow, mount } from 'enzyme'
import { Flyout } from '../'

const defaultProps = {
  FlyoutDirection: 'nw'
}

describe('<Flyout.Wrapper />', () => {
  it('renders a "div" by default', () => {
    const $ = shallow(<Flyout.Wrapper {...defaultProps}>_</Flyout.Wrapper>)
    expect($.type()).toBe('div')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Flyout.Wrapper node="article" {...defaultProps}>_</Flyout.Wrapper>)
    expect($.type()).toBe('article')
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Flyout.Wrapper className="is-open" {...defaultProps}>_</Flyout.Wrapper>)
    expect($.hasClass('c-flyout is-open')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Flyout.Wrapper {...defaultProps}>test child</Flyout.Wrapper>)
    expect($.contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Flyout.Wrapper
        {...defaultProps}
        style={{ position: 'relative' }}
        ariaHidden="true"
      >_</Flyout.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('takes a direction passing it to <Flyout.Content />', () => {
    const $ = mount(
      <Flyout.Wrapper direction="sw">
        <Flyout.Toggle><button /></Flyout.Toggle>
        <Flyout.Content>Child content</Flyout.Content>
      </Flyout.Wrapper>
    )

    expect($.find(Flyout.Content).hasClass('c-flyout__content--sw'))
  })

  it('renders the correct aria-expanded prop', () => {
    const $ = shallow(<Flyout.Wrapper {...defaultProps}>_</Flyout.Wrapper>)
    expect($.prop('aria-expanded')).toBe(false)

    $.setState({
      isOpen: true
    })
    expect($.prop('aria-expanded')).toBe(true)
  })

  it('can be opened and closed, focusing on the element that initially opened the flyout', () => {
    const Button = <button />
    const $ = mount(
      <Flyout.Wrapper {...defaultProps}>
        <Flyout.Toggle>{ Button }</Flyout.Toggle>
        <Flyout.Content>
          Child content
          <Flyout.Toggle><button /></Flyout.Toggle>
        </Flyout.Content>
      </Flyout.Wrapper>
    )

    expect($.hasClass('is-open')).toBe(false)

    $.find(Flyout.Toggle).simulate('click')
    expect($.hasClass('is-open')).toBe(true)

    $.find(Flyout.Content).find(Flyout.Toggle).simulate('click')
    expect($.hasClass('is-open')).toBe(false)
    expect($.find(Button).node === window.activeElement).toBe(true)
  })

  it('can be closed by clicking on the outside', () => {
    const Button = <button type="button" />
    const $ = mount(
      <Flyout.Wrapper clickOutsideToClose {...defaultProps}>
        <Flyout.Toggle>{ Button }</Flyout.Toggle>
        <Flyout.Content>Child content</Flyout.Content>
      </Flyout.Wrapper>
    )

    expect($.hasClass('is-open')).toBe(false)

    $.find(Flyout.Toggle).simulate('click')
    expect($.hasClass('is-open')).toBe(true)

    const evt = document.createEvent('HTMLEvents')
    evt.initEvent('click', false, true)
    window.dispatchEvent(evt)

    expect($.hasClass('is-open')).toBe(false)
  })

  it('renders closed by default', () => {
    const $ = shallow(<Flyout.Wrapper {...defaultProps}>_</Flyout.Wrapper>)
    expect($.hasClass('is-open')).toBe(false)
  })

  it('can be rendered open on the initial mount', () => {
    const props = {
      ...defaultProps,
      defaultOpen: 'open'
    }
    const $ = mount(
      <Flyout.Wrapper {...props}>
        <Flyout.Toggle><button /></Flyout.Toggle>
        <Flyout.Content>Child content</Flyout.Content>
      </Flyout.Wrapper>
    )
    expect($.hasClass('is-open')).toBe(true)

    $.find(Flyout.Toggle).simulate('click')
    expect($.hasClass('is-open')).toBe(false)
  })

  it('can be externally controlled', () => {
    const props = {
      ...defaultProps,
      isOpen: 'open'
    }
    const $ = shallow(<Flyout.Wrapper {...props}>_</Flyout.Wrapper>)
    expect($.hasClass('is-open')).toBe(true)

    $.setProps({
      isOpen: 'closed'
    })

    expect($.hasClass('is-open')).toBe(false)
  })

  it('calls an optional callback prop when a change event occurs', () => {
    const mockOnFlyoutChange = jest.fn()
    const props = {
      ...defaultProps,
      onFlyoutChange: mockOnFlyoutChange,
      clickOutsideToClose: true,
      isOpen: 'open'
    }
    const $ = mount(
      <Flyout.Wrapper {...props}>
        <Flyout.Toggle><button /></Flyout.Toggle>
        <Flyout.Content>Child content</Flyout.Content>
      </Flyout.Wrapper>
    )
    expect(mockOnFlyoutChange).not.toHaveBeenCalled()

    $.find(Flyout.Toggle).simulate('click')
    expect(mockOnFlyoutChange).toHaveBeenCalledWith(true)

    const evt = document.createEvent('HTMLEvents')
    evt.initEvent('click', false, true)
    window.dispatchEvent(evt)
    expect(mockOnFlyoutChange).toHaveBeenCalledTimes(2)
  })
})

