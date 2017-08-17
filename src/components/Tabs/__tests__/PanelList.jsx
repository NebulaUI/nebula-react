import React from 'react'
import { shallow } from 'enzyme'

import { Tabs } from '../'

describe('<Tabs.PanelList />', () => {
  it('renders the active panel', () => {
    const $ = shallow(
      <Tabs.PanelList activeIndex={1}>
        <Tabs.Panel className="panel0" />
        <Tabs.Panel className="panel1" />
        <Tabs.Panel className="panel2" />
      </Tabs.PanelList>
    )
    expect($.contains(<Tabs.Panel className="panel0" />)).toBe(false)
    expect($.contains(<Tabs.Panel className="panel1" />)).toBe(true)
    expect($.contains(<Tabs.Panel className="panel2" />)).toBe(false)
  })

  it('passes in an optional className', () => {
    const $ = shallow(<Tabs.PanelList className="test" />)
    expect($.hasClass('c-tabs__panels test')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Tabs.PanelList node="article">_</Tabs.PanelList>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Tabs.PanelList>-</Tabs.PanelList>)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Tabs.PanelList style={{ position: 'relative' }} ariaHidden="true">
        _
      </Tabs.PanelList>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
