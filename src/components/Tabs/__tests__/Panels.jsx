import React from 'react'
import { shallow } from 'enzyme'

import { Tabs } from '../'

describe('<Tabs.Panels />', () => {
  it('renders the active panel', () => {
    const $ = shallow(
      <Tabs.Panels activeIndex={1}>
        <Tabs.Panel className="panel0" />
        <Tabs.Panel className="panel1" />
        <Tabs.Panel className="panel2" />
      </Tabs.Panels>
    )
    expect($.contains(<Tabs.Panel className="panel0" />)).toBe(false)
    expect($.contains(<Tabs.Panel className="panel1" />)).toBe(true)
    expect($.contains(<Tabs.Panel className="panel2" />)).toBe(false)
  })

  it('passes in an optional className', () => {
    const $ = shallow(<Tabs.Panels className="test" />)
    expect($.prop('className')).toBe('c-tabs__panels test')
  })
})
