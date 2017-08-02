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
    expect($.prop('className')).toBe('c-tabs__tab test')
  })

  it('displays active state', () => {
    const $ = shallow(<Tabs.Tab isActive />)
    expect($.prop('className')).toBe('c-tabs__tab is-active')
  })

  it('can be disabled', () => {
    const $ = shallow(<Tabs.Tab disabled />)
    expect($.prop('disabled')).toBe(true)
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
