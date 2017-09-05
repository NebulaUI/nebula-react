import React from 'react'
import { shallow, mount } from 'enzyme'

import { Tabs } from '../'

const defaultProps = {
  target: '_'
}

const defaultContext = {
  setActiveLabel: jest.fn()
}

describe('<Tabs.Tab />', () => {
  it('renders children', () => {
    const context = defaultContext
    const $ = shallow(
      <Tabs.Tab {...defaultProps}>
        My tab
      </Tabs.Tab>
    , { context })
    expect($.contains('My tab')).toBe(true)
  })

  it('takes a className', () => {
    const context = defaultContext
    const $ = shallow(
      <Tabs.Tab className="test" {...defaultProps}>_</Tabs.Tab>
    , { context })
    expect($.hasClass('c-tabs__tab test')).toBe(true)
  })

  it('renders a defined node type', () => {
    const context = defaultContext
    const $ = shallow(
      <Tabs.Tab node="article" {...defaultProps}>_</Tabs.Tab>
    , { context })
    expect($.type()).toBe('article')
  })

  it('renders a button by default', () => {
    const context = defaultContext
    const $ = shallow(
      <Tabs.Tab {...defaultProps}>_</Tabs.Tab>
    , { context })
    expect($.type()).toBe('button')
  })

  it('renders with attributes', () => {
    const context = defaultContext
    const $ = shallow(
      <Tabs.Tab
        style={{ position: 'relative' }}
        ariaHidden="true"
        {...defaultProps}
      >
        _
      </Tabs.Tab>
    , { context })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders with an active className', () => {
    const context = defaultContext
    const $ = shallow(
      <Tabs.Tab isActive {...defaultProps}>_</Tabs.Tab>
    , { context })
    expect($.hasClass('c-tabs__tab is-active')).toBe(true)
  })

  it('activates the tab when clicked', () => {
    const context = defaultContext
    const activateTab = jest.fn()
    const props = {
      ...defaultProps,
      isActive: false,
      activateTab
    }
    const $ = shallow(
      <Tabs.Tab {...props}>_</Tabs.Tab>
    , { context })

    expect(activateTab).not.toHaveBeenCalled()

    $.simulate('click')
    expect(activateTab).toHaveBeenCalledTimes(1)

    $.setProps({ isActive: true })
    $.simulate('click')
    expect(activateTab).toHaveBeenCalledTimes(1)
  })

  it('allows switching tabs via arrow keys', () => {
    const context = defaultContext
    const activateTab = jest.fn()
    const props = {
      ...defaultProps,
      activateTab
    }
    const $ = shallow(
      <Tabs.Tab {...props}>_</Tabs.Tab>
      , { context })

    expect(activateTab).not.toHaveBeenCalled()
    $.simulate('keydown', { keyCode: 37 })
    expect(activateTab).toHaveBeenCalledWith('prev')

    $.simulate('keydown', { keyCode: 39 })
    expect(activateTab).toHaveBeenCalledWith('next')
  })

  it('sets the active label when mounted and active', () => {
    const setActiveLabel = jest.fn()
    const context = { setActiveLabel }
    const props = {
      ...defaultProps,
      isActive: true
    }
    mount(
      <Tabs.Tab {...props}>Test child</Tabs.Tab>
      , { context })

    expect(setActiveLabel).toHaveBeenCalledWith('Test child')
  })

  it('doesnt set the active label if not active', () => {
    const setActiveLabel = jest.fn()
    const context = { setActiveLabel }
    const props = {
      ...defaultProps,
      isActive: false
    }
    mount(
      <Tabs.Tab {...props}>Test child</Tabs.Tab>
      , { context })

    expect(setActiveLabel).not.toHaveBeenCalledWith('Test child')
  })

  it('sets the active label when it becomes active', () => {
    const setActiveLabel = jest.fn()
    const context = { setActiveLabel }
    const props = {
      ...defaultProps,
      isActive: false
    }
    const $ = mount(
      <Tabs.Tab {...props}>Test child</Tabs.Tab>
      , { context })

    expect(setActiveLabel).not.toHaveBeenCalled()

    $.setProps({ target: 'foo' })
    expect(setActiveLabel).not.toHaveBeenCalled()

    $.setProps({ isActive: true })
    expect(setActiveLabel).toHaveBeenCalledTimes(1)

    $.setProps({ isActive: false })
    expect(setActiveLabel).toHaveBeenCalledTimes(1)
  })

  it('sets the tabIndex to "-1" if not active', () => {
    const context = defaultContext
    const props = {
      ...defaultProps,
      isActive: false
    }
    const $ = shallow(
      <Tabs.Tab isActive {...props}>_</Tabs.Tab>
      , { context })
    expect($.prop('tabIndex')).toBe(-1)
  })

  it('sets the tabIndex to "0" if not active', () => {
    const context = defaultContext
    const props = {
      ...defaultProps,
      isActive: true
    }
    const $ = shallow(
      <Tabs.Tab isActive {...props}>_</Tabs.Tab>
      , { context })
    expect($.prop('tabIndex')).toBe(0)
  })

  it('sets "aria-selected" if active', () => {
    const context = defaultContext
    const props = {
      ...defaultProps,
      isActive: true
    }
    const $ = shallow(
      <Tabs.Tab isActive {...props}>_</Tabs.Tab>
      , { context })
    expect($.prop('aria-selected')).toBe(true)
  })

  it('sets "aria-controls" to the target', () => {
    const context = defaultContext
    const props = {
      ...defaultProps,
      target: 'test'
    }
    const $ = shallow(
      <Tabs.Tab isActive {...props}>_</Tabs.Tab>
      , { context })
    expect($.prop('aria-controls')).toBe('test')
  })
})
