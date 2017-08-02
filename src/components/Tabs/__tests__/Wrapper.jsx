import React from 'react'
import { shallow } from 'enzyme'

import { Tabs } from '../'

describe('<Tabs.Wrapper />', () => {
  it('passes in an optional className', () => {
    const $ = shallow(<Tabs.Wrapper className="test" />)
    expect($.prop('className')).toBe('c-tabs test')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Tabs.Wrapper node="article" />)
    expect($.type()).toBe('article')
  })

  it('renders children', () => {
    const $ = shallow(
      <Tabs.Wrapper>
        Test
      </Tabs.Wrapper>
    )
    expect($.contains('Test')).toBe(true)
  })

  it('renders <Tabs.Panels /> and <Tabs.TabList /> passing in the activeIndex', () => {
    const $ = shallow(
      <Tabs.Wrapper>
        <Tabs.TabList />
        <Tabs.Panels />
      </Tabs.Wrapper>
    )
    expect($.find(Tabs.Panels).prop('activeIndex')).toBe(0)
    expect($.find(Tabs.TabList).prop('activeIndex')).toBe(0)
    $.setState({ activeIndex: 2 })
    expect($.find(Tabs.Panels).prop('activeIndex')).toBe(2)
    expect($.find(Tabs.TabList).prop('activeIndex')).toBe(2)
  })

  it('passes activateTab() to <Tabs.TabList /> that sets the activeIndex when called', () => {
    const $ = shallow(
      <Tabs.Wrapper>
        <Tabs.TabList />
      </Tabs.Wrapper>
    )
    expect($.state('activeIndex')).toBe(0)
    $.find(Tabs.TabList).prop('activateTab')(1)
    expect($.find(Tabs.TabList).prop('activeIndex')).toBe(1)
  })
})
