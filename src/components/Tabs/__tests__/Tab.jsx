import React from 'react'
import { shallow } from 'enzyme'

import Tab from '../Tab'

describe('<Tab />', () => {
  it('renders children', () => {
    const $ = shallow(
      <Tab>
        My tab
      </Tab>
    )
    expect($.contains('My tab')).toBe(true)
  })

  it('passes down an optional className', () => {
    const $ = shallow(<Tab className="test" />)
    expect($.prop('className')).toBe('c-tabs__tab test')
  })

  it('displays active state', () => {
    const $ = shallow(<Tab isActive />)
    expect($.prop('className')).toBe('c-tabs__tab is-active')
  })

  it('can be disabled', () => {
    const $ = shallow(<Tab disabled />)
    expect($.prop('disabled')).toBe(true)
  })

  it('calls the callback when clicked, passing the index', () => {
    const activateTab = jest.fn()
    const index = 5
    const props = {
      activateTab,
      index
    }
    const $ = shallow(<Tab {...props} />)

    expect(activateTab).not.toHaveBeenCalled()
    $.simulate('click')
    expect(activateTab).toHaveBeenCalledWith(5)
  })
})
