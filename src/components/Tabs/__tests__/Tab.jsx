import React from 'react'
import { shallow } from 'enzyme'

import { Tabs } from '../'

describe('<Tabs.Tab />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Tabs.Tab>
        My tab
      </Tabs.Tab>
    )
    expect($.contains('My tab')).toBe(true)
  })

  it('takes a className', () => {
    const $ = shallow(<Tabs.Tab className="test" />)
    expect($.hasClass('c-tabs__tab test')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Tabs.Tab node="article">_</Tabs.Tab>)
    expect($.type()).toBe('article')
  })

  it('renders a button by default', () => {
    const $ = shallow(<Tabs.Tab>-</Tabs.Tab>)
    expect($.type()).toBe('button')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Tabs.Tab style={{ position: 'relative' }} ariaHidden="true">
        _
      </Tabs.Tab>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('displays active state', () => {
    const $ = shallow(<Tabs.Tab isActive />)
    expect($.hasClass('c-tabs__tab is-active')).toBe(true)
  })

  it('calls the callback when clicked, passing the index', () => {
    const activateTab = jest.fn()
    const index = 5
    const props = {
      activateTab,
      index
    }
    const $ = shallow(<Tabs.Tab {...props} />)

    expect(activateTab).not.toHaveBeenCalled()
    $.simulate('click')
    expect(activateTab).toHaveBeenCalledWith(5)
  })
})
