import React from 'react'
import { shallow } from 'enzyme'

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

  it('renders a defined node type', () => {
    const context = defaultContext
    const $ = shallow(<Tabs.TabList node="article">_</Tabs.TabList>, { context })
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const context = defaultContext
    const $ = shallow(<Tabs.TabList>_</Tabs.TabList>, { context })
    expect($.type()).toBe('div')
  })

  it.skip('renders tabs passing the index and callback', () => {
    const context = defaultContext
    const activateTab = jest.fn()
    const $ = shallow(
      <Tabs.TabList activateTab={activateTab} >
        <Tabs.Tab target="_">_</Tabs.Tab>
        <Tabs.Tab target="_">_</Tabs.Tab>
      </Tabs.TabList>
    , { context })
    expect($.find(Tabs.Tab).at(0).prop('index')).toBe(0)
    // expect($.find(Tabs.Tab).at(0).prop('activateTab')).toBe(activateTab)
    // expect($.find(Tabs.Tab).at(1).prop('index')).toBe(1)
    // expect($.find(Tabs.Tab).at(1).prop('activateTab')).toBe(activateTab)
  })

  it.skip('sets the active tab', () => {
    const activeIndex = 1
    const $ = shallow(
      <Tabs.TabList activeIndex={activeIndex} >
        <Tabs.Tab />
        <Tabs.Tab />
      </Tabs.TabList>
    )
    expect($.find(Tabs.Tab).at(0).prop('isActive')).toBe(false)
    expect($.find(Tabs.Tab).at(1).prop('isActive')).toBe(true)
  })
})
