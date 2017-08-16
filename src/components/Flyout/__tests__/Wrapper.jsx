import React from 'react'
import { shallow } from 'enzyme'

import { Flyout } from '../'

describe('<Flyout.Wrapper />', () => {
  it('renders a "div" by default', () => {
    const $ = shallow(<Flyout.Wrapper>test child</Flyout.Wrapper>)
    expect($.type()).toBe('div')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Flyout.Wrapper node="article">test child</Flyout.Wrapper>)
    expect($.type()).toBe('article')
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Flyout.Wrapper className="is-open">test child</Flyout.Wrapper>)
    expect($.hasClass('c-flyout is-open')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Flyout.Wrapper>test child</Flyout.Wrapper>)
    expect($.contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Flyout.Wrapper
        style={{ position: 'relative' }}
        ariaHidden="true"
      >
        test child
      </Flyout.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
