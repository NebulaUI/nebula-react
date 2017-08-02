import React from 'react'
import { shallow } from 'enzyme'

import TabsList from '../TabsList'
import Tab from '../Tab'

describe('<TabsList />', () => {
  it('renders the list-wrapper and the list', () => {
    const $ = shallow(<TabsList />)
    expect($.find('.c-tabs__list-wrapper')).toHaveLength(1)
    expect($.find('.c-tabs__list')).toHaveLength(1)
  })

  it('renders tabs passing the index and callback', () => {
    const activateTab = jest.fn()
    const $ = shallow(
      <TabsList activateTab={activateTab} >
        <Tab />
        <Tab />
      </TabsList>
    )
    expect($.find(Tab).at(0).prop('index')).toBe(0)
    expect($.find(Tab).at(0).prop('activateTab')).toBe(activateTab)
    expect($.find(Tab).at(1).prop('index')).toBe(1)
    expect($.find(Tab).at(1).prop('activateTab')).toBe(activateTab)
  })

  it.skip('sets the active tab', () => {
    const activateTab = jest.fn()
    const activeIndex = 0
    const props = {
      activateTab,
      activeIndex
    }
    const $ = shallow(
      <TabsList {...props} >
        <Tab />
      </TabsList>
    )
    expect($.find(Tab).prop('index')).toBe(0)
    expect($.find(Tab).prop('activateTab')).toBe(activateTab)
  })
})
