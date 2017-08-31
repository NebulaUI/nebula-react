import React from 'react'
import { shallow } from 'enzyme'

import { ButtonDropdown } from '../'

describe('<ButtonDropdown.Toggle />', () => {
  it('renders children', () => {
    const child = <div />
    const $ = shallow(
      <ButtonDropdown.Toggle>
        <child />
      </ButtonDropdown.Toggle>
    )
    expect($.contains(<child />)).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<ButtonDropdown.Toggle className="test">_</ButtonDropdown.Toggle>)
    expect($.hasClass('c-btn-dropdown__toggle test')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<ButtonDropdown.Toggle node="article">_</ButtonDropdown.Toggle>)
    expect($.type()).toBe('article')
  })

  it('renders a button by default', () => {
    const $ = shallow(<ButtonDropdown.Toggle>_</ButtonDropdown.Toggle>)
    expect($.type()).toBe('button')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <ButtonDropdown.Toggle style={{ position: 'relative' }} ariaHidden="true">
        _
      </ButtonDropdown.Toggle>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders closed on the initial render', () => {
    const $ = shallow(<ButtonDropdown.Toggle>_</ButtonDropdown.Toggle>)
    expect($.hasClass('c-btn-dropdown__toggle is-open')).toBe(false)
  })

  it.skip('can be opened and closed', () => {
    const $ = shallow(<ButtonDropdown.Toggle>_</ButtonDropdown.Toggle>)
    expect($.hasClass('is-open')).toBe(false)

    $.simulate('click')
    expect($.hasClass('is-open')).toBe(true)

    $.simulate('click')
    expect($.hasClass('is-open')).toBe(false)

    $.simulate('click')
    expect($.hasClass('is-open')).toBe(true)
  })
})
