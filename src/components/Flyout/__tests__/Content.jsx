import React from 'react'
import { shallow } from 'enzyme'

import { Flyout } from '../'

describe('<Flyout.Content />', () => {
  it('renders a "div" by default', () => {
    const $ = shallow(<Flyout.Content>test child</Flyout.Content>)
    expect($.type()).toBe('div')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Flyout.Content node="article">test child</Flyout.Content>)
    expect($.type()).toBe('article')
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Flyout.Content className="test">test child</Flyout.Content>)
    expect($.hasClass('c-flyout__content test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Flyout.Content>test child</Flyout.Content>)
    expect($.contains('test child')).toBe(true)
  })

  it('renders with a default direction', () => {
    const $ = shallow(<Flyout.Content>test child</Flyout.Content>)
    expect($.hasClass('c-flyout__content')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Flyout.Content
        style={{ position: 'relative' }}
        ariaHidden="true"
      >
        test child
      </Flyout.Content>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  describe('can be configured with a direction and classname', () => {
    it('renders the direction as ne', () => {
      const $ = shallow(
        <Flyout.Content
          className="c-flyout__content--ne"
          direction="ne"
        >
          test child
        </Flyout.Content>
      )
      expect($.hasClass('c-flyout__content--ne')).toBe(true)
    })

    it('renders the direction as se', () => {
      const $ = shallow(
        <Flyout.Content
          className="c-flyout__content--se"
          direction="se"
        >
          test child
        </Flyout.Content>
      )
      expect($.hasClass('c-flyout__content--se')).toBe(true)
    })

    it('renders the direction as sw', () => {
      const $ = shallow(
        <Flyout.Content
          className="c-flyout__content--sw"
          direction="sw"
        >
          test child
        </Flyout.Content>
      )
      expect($.hasClass('c-flyout__content--sw')).toBe(true)
    })

    it('renders the direction as nw', () => {
      const $ = shallow(
        <Flyout.Content
          className="c-flyout__content--nw"
          direction="nw"
        >
          test child
        </Flyout.Content>
      )
      expect($.hasClass('c-flyout__content--nw')).toBe(true)
    })
  })
})
