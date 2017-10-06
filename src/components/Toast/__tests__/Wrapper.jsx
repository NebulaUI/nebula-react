import React from 'react'
import { shallow, mount } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Toast } from '../'

describe('<Toast.Wrapper />', () => {
  it('takes a className that gets appended', () => {
    const $ = shallow(<Toast.Wrapper className="test" />)
    expect($.hasClass(`${NAMESPACE}c-toast`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Toast.Wrapper tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders a ul by default', () => {
    const $ = shallow(<Toast.Wrapper />)
    expect($.type()).toBe('ul')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Toast.Wrapper style={{ position: 'relative' }} ariaHidden />
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  describe('positioning', () => {
    it('renders nw', () => {
      const $ = shallow(<Toast.Wrapper position="nw" />)
      expect($.hasClass(`${NAMESPACE}c-toast`)).toBe(true)
      expect($.hasClass(`${NAMESPACE}c-toast--nw`)).toBe(true)
    })

    it('renders ne', () => {
      const $ = shallow(<Toast.Wrapper position="ne" />)
      expect($.hasClass(`${NAMESPACE}c-toast`)).toBe(true)
      expect($.hasClass(`${NAMESPACE}c-toast--ne`)).toBe(true)
    })

    it('renders se', () => {
      const $ = shallow(<Toast.Wrapper position="se" />)
      expect($.hasClass(`${NAMESPACE}c-toast`)).toBe(true)
      expect($.hasClass(`${NAMESPACE}c-toast--se`)).toBe(true)
    })

    it('renders sw', () => {
      const $ = shallow(<Toast.Wrapper position="sw" />)
      expect($.hasClass(`${NAMESPACE}c-toast`)).toBe(true)
      expect($.hasClass(`${NAMESPACE}c-toast--sw`)).toBe(true)
    })
  })

  describe('children', () => {
    it('renders a warning if the type is not a <Toast.Item />', () => {
      const spy = jest.spyOn(window.console, 'warn')
      shallow(<Toast.Wrapper>Test</Toast.Wrapper>)
      expect(spy).toBeCalledWith('Test is not a valid child of <Toast.Wrapper />')

      spy.mockReset()
    })

    it('removes the child if dismissed', () => {
      const $ = mount(
        <Toast.Wrapper>
          <Toast.Item id="test">
            <Toast.Dismiss />
          </Toast.Item>
          <Toast.Item id="test-1">
            <Toast.Dismiss />
          </Toast.Item>
        </Toast.Wrapper>
      )
      expect($.children()).toHaveLength(2)

      $.childAt(0).find(Toast.Dismiss).simulate('click')
      expect($.children()).toHaveLength(1)
    })

    it('removes the child after a timeout', () => {
      jest.useFakeTimers()
      const $ = mount(
        <Toast.Wrapper>
          <Toast.Item timeout={1000} id="test">
            <Toast.Dismiss />
          </Toast.Item>
          <Toast.Item id="test-1">
            <Toast.Dismiss />
          </Toast.Item>
        </Toast.Wrapper>
      )
      expect($.children()).toHaveLength(2)

      jest.runTimersToTime(1000)
      expect($.children()).toHaveLength(1)
    })

    it('calls onItemDismiss callback with the itemID', () => {
      const mockOnItemDismiss = jest.fn()
      const $ = mount(
        <Toast.Wrapper onItemDismiss={mockOnItemDismiss}>
          <Toast.Item id="test">
            <Toast.Dismiss />
          </Toast.Item>
          <Toast.Item id="test-1">
            <Toast.Dismiss />
          </Toast.Item>
        </Toast.Wrapper>
      )
      expect(mockOnItemDismiss).not.toBeCalled()

      $.childAt(0).find(Toast.Dismiss).simulate('click')
      expect(mockOnItemDismiss).toHaveBeenCalledWith('test')
    })
  })
})
