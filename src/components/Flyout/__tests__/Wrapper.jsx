import React from 'react'
import { shallow, mount } from 'enzyme'

import { Flyout } from '../'

describe('<Flyout.Wrapper />', () => {
  it('renders a "div" by default', () => {
    const $ = shallow(<Flyout.Wrapper>_</Flyout.Wrapper>)
    expect($.childAt(0).type()).toBe('div')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Flyout.Wrapper node="article">_</Flyout.Wrapper>)
    expect($.childAt(0).type()).toBe('article')
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Flyout.Wrapper className="is-open">_</Flyout.Wrapper>)
    expect($.childAt(0).hasClass('c-flyout is-open')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Flyout.Wrapper>test child</Flyout.Wrapper>)
    expect($.childAt(0).contains('test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Flyout.Wrapper
        style={{ position: 'relative' }}
        ariaHidden="true"
      >_</Flyout.Wrapper>
    )
    expect($.childAt(0).prop('style')).toEqual({
      position: 'relative'
    })
    expect($.childAt(0).prop('ariaHidden')).toBe('true')
  })

  it('can be opened and closed', () => {
    const $ = mount(
      <Flyout.Wrapper>
        <Flyout.Toggle><button /></Flyout.Toggle>
        <Flyout.Content>Child content</Flyout.Content>
      </Flyout.Wrapper>
    )

    expect($.find(Flyout.Wrapper).hasClass('is-open')).toBe(false)

    $.find(Flyout.Toggle).simulate('click')
    expect($.find(Flyout.Wrapper).hasClass('is-open')).toBe(true)

    $.instance().close()
    expect($.find(Flyout.Wrapper).hasClass('is-open')).toBe(false)
  })
})
