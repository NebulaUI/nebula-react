import React from 'react'
import { shallow } from 'enzyme'

import Panel from '../Panel'

describe('<Panel />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Panel>
        My tab
      </Panel>
    )
    expect($.contains('My tab')).toBe(true)
  })

  it('passes down an optional className', () => {
    const $ = shallow(<Panel className="test" />)
    expect($.prop('className')).toBe('c-tabs__panel test')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Panel node="article" />)
    expect($.type()).toBe('article')
  })
})
