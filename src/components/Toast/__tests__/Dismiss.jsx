import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Toast } from '../'

const defaultContext = {
  dismissToastItem: jest.fn(),
  toastItemId: '_'
}

describe('<Toast.Dismiss />', () => {
  it('takes a className that gets appended', () => {
    const $ = shallow(<Toast.Dismiss className="test">_</Toast.Dismiss>
    , { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-toast__dismiss`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Toast.Dismiss tag="article">_</Toast.Dismiss>
    , { context: defaultContext })
    expect($.type()).toBe('article')
  })

  it('renders a button by default', () => {
    const $ = shallow(<Toast.Dismiss>_</Toast.Dismiss>
    , { context: defaultContext })
    expect($.type()).toBe('button')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Toast.Dismiss style={{ position: 'relative' }} ariaHidden>
        _
      </Toast.Dismiss>
    , { context: defaultContext })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Toast.Dismiss>test child</Toast.Dismiss>
    , { context: defaultContext })
    expect($.contains('test child')).toBe(true)
  })

  it('renders styled if no children', () => {
    const $ = shallow(<Toast.Dismiss />
      , { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-toast__dismiss`)).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-toast__dismiss--styled`)).toBe(true)
  })

  it('renders unstyled if children', () => {
    const $ = shallow(<Toast.Dismiss>_</Toast.Dismiss>
      , { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-toast__dismiss`)).toBe(true)
    expect($.hasClass(`${NAMESPACE}c-toast__dismiss--styled`)).toBe(false)
  })

  it('handles click events', () => {
    const mockDismissToastItem = jest.fn(() => () => {})
    const context = {
      ...defaultContext,
      dismissToastItem: mockDismissToastItem,
      toastItemId: 'test'
    }
    const $ = shallow(<Toast.Dismiss>_</Toast.Dismiss>, { context })

    expect(mockDismissToastItem).not.toHaveBeenCalled()

    $.simulate('click')
    expect(mockDismissToastItem).toHaveBeenCalledWith('test')
  })
})
