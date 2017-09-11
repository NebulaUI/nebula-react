import React from 'react'
import { shallow, mount } from 'enzyme'

import { Tabs } from '../'

const defaultContext = {
  activateTab: jest.fn()
}

describe('<Tabs.TabList />', () => {
  it('renders the list-wrapper and the list', () => {
    const context = defaultContext
    const $ = shallow(<Tabs.TabList>_</Tabs.TabList>, { context })
    expect($.find('.c-tabs__list-wrapper')).toHaveLength(1)
    expect($.find('.c-tabs__list')).toHaveLength(1)
  })

  it('renders with appropriate classNames', () => {
    const context = defaultContext
    const $ = shallow(<Tabs.TabList className="test">Test</Tabs.TabList>, { context })
    expect($.hasClass('c-tabs__list-wrapper test')).toBe(true)
    expect($.children().hasClass('c-tabs__list')).toBe(true)
  })

  it('renders with attributes', () => {
    const context = defaultContext
    const $ = shallow(
      <Tabs.TabList style={{ position: 'relative' }} ariaHidden="true">
        _
      </Tabs.TabList>
    , { context })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders a defined tag type', () => {
    const context = defaultContext
    const $ = shallow(<Tabs.TabList tag="article">_</Tabs.TabList>, { context })
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const context = defaultContext
    const $ = shallow(<Tabs.TabList>_</Tabs.TabList>, { context })
    expect($.type()).toBe('div')
  })

  it('sets the activeId to the first Tab if it does not exist', () => {
    const $ = mount(
      <Tabs.Wrapper>
        <Tabs.TabList>
          <Tabs.Tab target="test-target">_</Tabs.Tab>
          <Tabs.Tab target="foo">_</Tabs.Tab>
        </Tabs.TabList>
      </Tabs.Wrapper>
    )
    expect($.state('activeId')).toBe('test-target')
  })

  it('does not set the activeId to the first Tab if it already exists', () => {
    const $ = mount(
      <Tabs.Wrapper defaultActiveId="foo">
        <Tabs.TabList>
          <Tabs.Tab target="test-target">_</Tabs.Tab>
          <Tabs.Tab target="foo">_</Tabs.Tab>
        </Tabs.TabList>
      </Tabs.Wrapper>
    )
    expect($.state('activeId')).toBe('foo')
  })

  it('activates the next/prev tab when the forward/backward keys are pressed', () => {
    const $ = mount(
      <Tabs.Wrapper>
        <Tabs.TabList>
          <Tabs.Tab target="test-1">_</Tabs.Tab>
          <Tabs.Tab target="test-2">_</Tabs.Tab>
          <Tabs.Tab target="test-3">_</Tabs.Tab>
        </Tabs.TabList>
      </Tabs.Wrapper>
    )
    expect($.state('activeId')).toBe('test-1')

    $.find(Tabs.Tab).at(0).simulate('keydown', { keyCode: 39 })
    expect($.state('activeId')).toBe('test-2')
    $.find(Tabs.Tab).at(1).simulate('keydown', { keyCode: 39 })
    expect($.state('activeId')).toBe('test-3')
    $.find(Tabs.Tab).at(2).simulate('keydown', { keyCode: 39 })
    expect($.state('activeId')).toBe('test-1')

    $.find(Tabs.Tab).at(2).simulate('keydown', { keyCode: 37 })
    expect($.state('activeId')).toBe('test-2')
    $.find(Tabs.Tab).at(1).simulate('keydown', { keyCode: 37 })
    expect($.state('activeId')).toBe('test-1')
    $.find(Tabs.Tab).at(0).simulate('keydown', { keyCode: 37 })
    expect($.state('activeId')).toBe('test-3')
  })

  it('activates the corresponding tab when clicked', () => {
    const $ = mount(
      <Tabs.Wrapper>
        <Tabs.TabList>
          <Tabs.Tab target="test-1">_</Tabs.Tab>
          <Tabs.Tab target="test-2">_</Tabs.Tab>
          <Tabs.Tab target="test-3">_</Tabs.Tab>
        </Tabs.TabList>
      </Tabs.Wrapper>
    )
    expect($.state('activeId')).toBe('test-1')

    $.find(Tabs.Tab).at(1).simulate('click')
    expect($.state('activeId')).toBe('test-2')
  })
})
