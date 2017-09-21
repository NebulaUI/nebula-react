import React from 'react'
import { shallow, mount } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Tabs } from '../'

const defaultContext = {
  activateTab: jest.fn()
}

describe('<Tabs.TabList />', () => {
  it('renders with the default className', () => {
    const $ = shallow(
      <Tabs.TabList>
        <Tabs.Tab target="_">_</Tabs.Tab>
      </Tabs.TabList>
      , { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-tabs__list-wrapper`)).toBe(true)
    expect($.children().hasClass(`${NAMESPACE}c-tabs__list`)).toBe(true)
  })

  it('renders with an optional className', () => {
    const $ = shallow(
      <Tabs.TabList>
        <Tabs.Tab target="_" className="test">_</Tabs.Tab>
      </Tabs.TabList>
      , { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-tabs__list-wrapper`)).toBe(true)
    expect($.children().hasClass(`${NAMESPACE}c-tabs__list`)).toBe(true)
  })

  it('renders the list-wrapper and the list', () => {
    const $ = shallow(
      <Tabs.TabList>
        <Tabs.Tab target="_">_</Tabs.Tab>
      </Tabs.TabList>
      , { context: defaultContext })
    expect($.find(`.${NAMESPACE}c-tabs__list-wrapper`)).toHaveLength(1)
    expect($.find(`.${NAMESPACE}c-tabs__list`)).toHaveLength(1)
  })

  it('renders with tab items spread evenly', () => {
    const $ = shallow(
      <Tabs.TabList spreadItems>
        <Tabs.Tab target="_">_</Tabs.Tab>
      </Tabs.TabList>
      , { context: defaultContext })
    expect($.childAt(0).hasClass(`${NAMESPACE}c-tabs__list`)).toBe(true)
    expect($.childAt(0).hasClass(`${NAMESPACE}c-tabs__list--spread-items`)).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Tabs.TabList style={{ position: 'relative' }} ariaHidden="true">
        <Tabs.Tab target="_">_</Tabs.Tab>
      </Tabs.TabList>
    , { context: defaultContext })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders a defined tag type', () => {
    const $ = shallow(
      <Tabs.TabList tag="article">
        <Tabs.Tab target="_">_</Tabs.Tab>
      </Tabs.TabList>
      , { context: defaultContext })
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(
      <Tabs.TabList>
        <Tabs.Tab target="_">_</Tabs.Tab>
      </Tabs.TabList>
      , { context: defaultContext })
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
          <Tabs.Tab target="test-0">_</Tabs.Tab>
          <Tabs.Tab target="test-1">_</Tabs.Tab>
          <Tabs.Tab target="test-2" disabled>_</Tabs.Tab>
          <Tabs.Tab target="test-3">_</Tabs.Tab>
        </Tabs.TabList>
      </Tabs.Wrapper>
    )
    expect($.state('activeId')).toBe('test-0')

    $.find(Tabs.Tab).at(0).simulate('keydown', { keyCode: 39 })
    expect($.state('activeId')).toBe('test-1')
    $.find(Tabs.Tab).at(1).simulate('keydown', { keyCode: 39 })
    expect($.state('activeId')).toBe('test-3')
    $.find(Tabs.Tab).at(3).simulate('keydown', { keyCode: 39 })
    expect($.state('activeId')).toBe('test-0')

    $.find(Tabs.Tab).at(0).simulate('keydown', { keyCode: 37 })
    expect($.state('activeId')).toBe('test-3')
    $.find(Tabs.Tab).at(3).simulate('keydown', { keyCode: 37 })
    expect($.state('activeId')).toBe('test-1')
    $.find(Tabs.Tab).at(1).simulate('keydown', { keyCode: 37 })
    expect($.state('activeId')).toBe('test-0')
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
