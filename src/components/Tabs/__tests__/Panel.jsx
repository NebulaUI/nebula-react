import React from 'react'
import { shallow } from 'enzyme'

import { Tabs } from '../'

const defaultProps = {
  id: 'test'
}

const defaultContext = {
  activeTabLabel: '_',
  activeTabId: 'test'
}

describe('<Tabs.Panel />', () => {
  it('renders children when active', () => {
    const context = {
      ...defaultContext,
      activeTabId: 'test-id'
    }
    const props = {
      ...defaultProps,
      id: 'test-id'
    }
    const $ = shallow(
      <Tabs.Panel {...props}>
        My tab
      </Tabs.Panel>
    , { context })
    expect($.contains('My tab')).toBe(true)
  })

  it('doesnt render children when not active', () => {
    const context = {
      ...defaultContext,
      activeTabId: 'dont-render'
    }
    const props = {
      ...defaultProps,
      id: 'test-id'
    }
    const $ = shallow(
      <Tabs.Panel {...props}>
        My tab
      </Tabs.Panel>
      , { context })
    expect($.contains('My tab')).toBe(false)
  })

  it('takes a className', () => {
    const props = {
      ...defaultProps,
      className: 'test'
    }
    const $ = shallow(<Tabs.Panel {...props} />, { context: defaultContext })
    expect($.hasClass('c-tabs__panel test')).toBe(true)
  })

  it('renders with attributes', () => {
    const props = {
      ...defaultProps,
      className: 'test',
      style: {
        position: 'relative'
      }
    }
    const $ = shallow(<Tabs.Panel {...props} />, { context: defaultContext })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
  })

  it('renders a defined node type', () => {
    const props = {
      ...defaultProps,
      node: 'article'
    }
    const $ = shallow(<Tabs.Panel {...props} />, { context: defaultContext })
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Tabs.Panel {...defaultProps} />, { context: defaultContext })
    expect($.type()).toBe('div')
  })
})
