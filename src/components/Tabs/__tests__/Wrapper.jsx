import React from 'react'
import { shallow, mount } from 'enzyme'

import { Tabs } from '../'

describe('<Tabs.Wrapper />', () => {
  it('passes in an optional className', () => {
    const $ = shallow(<Tabs.Wrapper className="test">_</Tabs.Wrapper>)
    expect($.hasClass('c-tabs test')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Tabs.Wrapper style={{ position: 'relative' }} ariaHidden="true">
        _
      </Tabs.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Tabs.Wrapper node="article">_</Tabs.Wrapper>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Tabs.Wrapper>_</Tabs.Wrapper>)
    expect($.type()).toBe('div')
  })

  it('renders children', () => {
    const $ = shallow(
      <Tabs.Wrapper>
        Test
      </Tabs.Wrapper>
    )
    expect($.contains('Test')).toBe(true)
  })

  it('the active Id can be passed in as a prop, overriding local state', () => {
    const $ = mount(
      <Tabs.Wrapper activeId="test-id">
        <Tabs.TabList>
          <Tabs.Tab target="foo">_</Tabs.Tab>
          <Tabs.Tab target="test-id">_</Tabs.Tab>
        </Tabs.TabList>
        <Tabs.Panel id="foo">Foo content</Tabs.Panel>
        <Tabs.Panel id="test-id">Test Content</Tabs.Panel>
      </Tabs.Wrapper>
    )

    expect($.state('activeId')).toBeNull()
    expect($.find(Tabs.Tab).at(0).prop('isActive')).toBe(false)
    expect($.find(Tabs.Tab).at(1).prop('isActive')).toBe(true)
    expect($.find(Tabs.Panel).at(0).contains('Foo content')).toBe(false)
    expect($.find(Tabs.Panel).at(1).text()).toBe('Test Content')

    $.find(Tabs.Tab).at(0).simulate('click')
    expect($.find(Tabs.Tab).at(0).prop('isActive')).toBe(false)
  })

  it('allows a defaultActiveId to be passed', () => {
    const $ = mount(
      <Tabs.Wrapper defaultActiveId="test-id">
        <Tabs.TabList>
          <Tabs.Tab target="foo">_</Tabs.Tab>
          <Tabs.Tab target="test-id">_</Tabs.Tab>
        </Tabs.TabList>
      </Tabs.Wrapper>
    )

    expect($.state('activeId')).toBe('test-id')
    expect($.find(Tabs.Tab).at(0).prop('isActive')).toBe(false)
    expect($.find(Tabs.Tab).at(1).prop('isActive')).toBe(true)
  })

  it('takes an onTabChange callback that gets called when a tab is changed', () => {
    const mockOnTabChange = jest.fn()
    const $ = mount(
      <Tabs.Wrapper onTabChange={mockOnTabChange}>
        <Tabs.TabList>
          <Tabs.Tab target="foo">_</Tabs.Tab>
          <Tabs.Tab target="test-id">_</Tabs.Tab>
        </Tabs.TabList>
      </Tabs.Wrapper>
    )

    expect(mockOnTabChange).not.toHaveBeenCalled()

    $.find(Tabs.Tab).at(1).simulate('click')
    expect(mockOnTabChange).toHaveBeenCalledWith('test-id')

    $.find(Tabs.Tab).at(0).simulate('click')
    expect(mockOnTabChange).toHaveBeenCalledWith('foo')
  })
})
