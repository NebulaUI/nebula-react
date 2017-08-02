import React from 'react'
import { shallow } from 'enzyme'

import { Tabs } from '../'

describe('<Tabs.Panel />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Tabs.Panel>
        My tab
      </Tabs.Panel>
    )
    expect($.contains('My tab')).toBe(true)
  })

  it('takes a className', () => {
    const $ = shallow(<Tabs.Panel className="test" />)
    expect($.hasClass('c-tabs__panel test')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Tabs.Panel node="article" />)
    expect($.type()).toBe('article')
  })
})
