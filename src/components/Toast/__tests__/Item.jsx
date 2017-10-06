import React from 'react'
import { shallow, mount } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Toast } from '../'

const defaultProps = {
  id: '_',
  addItemId: jest.fn()
}

describe('<Toast.Item />', () => {
  it('takes a className that gets appended', () => {
    const $ = shallow(<Toast.Item className="test" {...defaultProps}>_</Toast.Item>)
    expect($.hasClass(`${NAMESPACE}c-toast__item`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Toast.Item tag="article" {...defaultProps}>_</Toast.Item>)
    expect($.type()).toBe('article')
  })

  it('renders a li by default', () => {
    const $ = shallow(<Toast.Item {...defaultProps}>_</Toast.Item>)
    expect($.type()).toBe('li')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Toast.Item {...defaultProps} style={{ position: 'relative' }} ariaHidden>
        _
      </Toast.Item>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Toast.Item {...defaultProps}>test child</Toast.Item>)
    expect($.contains('test child')).toBe(true)
  })

  it('Adds the item Id before mounting', () => {
    const mockAddItemId = jest.fn()
    mount(
      <Toast.Item addItemId={mockAddItemId} id="test">_</Toast.Item>
    )

    expect(mockAddItemId).toHaveBeenCalledWith('test')
  })

  it('adds a has-mounted class after mounting', () => {
    jest.useFakeTimers()

    const $ = mount(<Toast.Item {...defaultProps}>_</Toast.Item>)

    expect($.hasClass(`${NAMESPACE}c-toast__item`)).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-toast__item--has-mounted`)).toBe(false)

    jest.runAllTimers()
    expect($.hasClass(`${NAMESPACE}c-toast__item--has-mounted`)).toBe(true)
  })

  it('is dismissed after a timeout', () => {
    jest.useFakeTimers()
    const mockDismiss = jest.fn()

    mount(
      <Toast.Item {...defaultProps} dismiss={mockDismiss} timeout={1000}>
        _
      </Toast.Item>
    )

    expect(mockDismiss).not.toBeCalled()

    jest.runTimersToTime(1000)
    expect(mockDismiss).toBeCalled()
  })

  it('is dismissed when escape key is pressed', () => {
    const mockDismiss = jest.fn()

    const $ = mount(
      <Toast.Item {...defaultProps} dismiss={mockDismiss}>
        _
      </Toast.Item>
    )

    expect(mockDismiss).not.toBeCalled()

    $.simulate('keyup', { keyCode: 27 })
    expect(mockDismiss).toHaveBeenCalledTimes(1)

    $.simulate('keyup', { keyCode: 26 })
    expect(mockDismiss).toHaveBeenCalledTimes(1)
  })
})
