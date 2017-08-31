import React from 'react'
import { shallow, mount } from 'enzyme'

import { addEListener, removeEListener } from '../../../utils/window'

import { ButtonDropdown } from '../'

jest.mock('../../../utils/window')

describe('<ButtonDropdown.Wrapper />', () => {
  it('renders children', () => {
    const $ = shallow(
      <ButtonDropdown.Wrapper>
        Test child
      </ButtonDropdown.Wrapper>
    )
    expect($.contains('Test child')).toBe(true)
  })

  it.skip('renders with appropriate classNames', () => {
    const $ = shallow(<ButtonDropdown.Wrapper className="test">_</ButtonDropdown.Wrapper>)
    expect($.hasClass('c-btn-dropdown test')).toBe(true)
  })

  it('renders a defined node type', () => {
    const $ = shallow(<ButtonDropdown.Wrapper node="article">_</ButtonDropdown.Wrapper>)
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<ButtonDropdown.Wrapper>_</ButtonDropdown.Wrapper>)
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <ButtonDropdown.Wrapper style={{ position: 'relative' }} ariaHidden="true">
        _
      </ButtonDropdown.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it.skip('adds a click handler to the window when mounted and removes it when it unmounts', () => {
    const mockAddEventListener = jest.fn()
    const mockRemoveEventListener = jest.fn()
    addEListener.mockImplementation(mockAddEventListener)
    removeEListener.mockImplementation(mockRemoveEventListener)

    const $ = mount(<ButtonDropdown.Wrapper>_</ButtonDropdown.Wrapper>)
    const handleClickOutside = $.instance().handleClickOutside
    expect(mockAddEventListener).toHaveBeenCalledWith('click', handleClickOutside)
    $.unmount()
    expect(mockRemoveEventListener).toHaveBeenCalledWith('click', handleClickOutside)
  })

  it('closes when clicked outside', () => {
    const $ = mount(<ButtonDropdown.Wrapper>_</ButtonDropdown.Wrapper>)
    $.setState({
      isOpen: true
    })
    expect($.hasClass('is-open')).toBe(true)
    $.instance().handleClickOutside({
      target: 'foo'
    })
    expect($.hasClass('is-open')).toBe(false)
  })
})
