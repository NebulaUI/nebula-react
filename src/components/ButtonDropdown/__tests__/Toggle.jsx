import React from 'react'
import { shallow } from 'enzyme'

import { ButtonDropdown } from '../'

const defaultProps = {
  handleToggle: jest.fn()
}

describe('<ButtonDropdown.Toggle />', () => {
  it('renders children', () => {
    const child = <div />
    const $ = shallow(
      <ButtonDropdown.Toggle {...defaultProps}>
        <child />
      </ButtonDropdown.Toggle>
    )
    expect($.contains(<child />)).toBe(true)
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<ButtonDropdown.Toggle {...defaultProps} className="test">_</ButtonDropdown.Toggle>)
    expect($.hasClass('c-btn-dropdown__toggle test')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<ButtonDropdown.Toggle {...defaultProps} node="article">_</ButtonDropdown.Toggle>)
    expect($.type()).toBe('article')
  })

  it('renders a button by default', () => {
    const $ = shallow(<ButtonDropdown.Toggle {...defaultProps}>_</ButtonDropdown.Toggle>)
    expect($.type()).toBe('button')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <ButtonDropdown.Toggle {...defaultProps} style={{ position: 'relative' }} ariaHidden="true">
        _
      </ButtonDropdown.Toggle>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders closed on the initial render', () => {
    const $ = shallow(<ButtonDropdown.Toggle {...defaultProps}>_</ButtonDropdown.Toggle>)
    expect($.hasClass('c-btn-dropdown__toggle is-open')).toBe(false)
  })

  it('calls handleToggle when clicked', () => {
    const mockHandleToggle = jest.fn()
    const $ = shallow(
      <ButtonDropdown.Toggle handleToggle={mockHandleToggle}>
        _
      </ButtonDropdown.Toggle>
    )

    expect(mockHandleToggle).toHaveBeenCalledTimes(0)

    $.simulate('click')
    expect(mockHandleToggle).toHaveBeenCalledTimes(1)
  })
})
