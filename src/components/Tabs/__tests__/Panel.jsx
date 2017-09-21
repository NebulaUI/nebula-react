import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Tabs } from '../'

const defaultProps = {
  id: 'test'
}

const defaultContext = {
  activeTabLabel: '_',
  activeTabId: 'test'
}

describe('<Tabs.Panel />', () => {
  it('takes a default className', () => {
    const $ = shallow(<Tabs.Panel {...defaultProps} />, { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-tabs__panel`)).toBe(true)
  })

  it('takes an optional className', () => {
    const props = {
      ...defaultProps,
      className: 'test'
    }
    const $ = shallow(<Tabs.Panel {...props} />, { context: defaultContext })
    expect($.hasClass('test')).toBe(true)
  })

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

  it('renders a defined tag type', () => {
    const props = {
      ...defaultProps,
      tag: 'article'
    }
    const $ = shallow(<Tabs.Panel {...props} />, { context: defaultContext })
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Tabs.Panel {...defaultProps} />, { context: defaultContext })
    expect($.type()).toBe('div')
  })
})
