import React from 'react'
import { shallow, mount } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Foldable } from '../'

import getHeight from '../../../utils/getHeight'

jest.mock('../../../utils/getHeight')

const defaultContext = {
  isFoldableOpen: true,
  foldableId: '123'
}

describe('<Foldable.Body />', () => {
  it('passes in an optional className', () => {
    const $ = shallow(<Foldable.Body className="something else">_</Foldable.Body>, { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-foldable__body`)).toBe(true)
    expect($.hasClass('something else')).toBe(true)
  })

  it('renders a defined tag type', () => {
    const $ = shallow(<Foldable.Body tag="article">_</Foldable.Body>, { context: defaultContext })
    expect($.type()).toBe('article')
  })

  it('renders a div by default', () => {
    const $ = shallow(<Foldable.Body>_</Foldable.Body>, { context: defaultContext })
    expect($.type()).toBe('div')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Foldable.Body style={{ position: 'relative' }} ariaHidden="true">
        _
      </Foldable.Body>
      , { context: defaultContext })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders with aria-hidden set to false when expanded', () => {
    const context = {
      ...defaultContext,
      isFoldableOpen: true
    }
    const $ = shallow(<Foldable.Body isOpen>_</Foldable.Body>, { context })
    expect($.prop('aria-hidden')).toBe(false)
  })

  it('renders with aria-hidden set to true when collapsed', () => {
    const context = {
      ...defaultContext,
      isFoldableOpen: false
    }
    const $ = shallow(<Foldable.Body>_</Foldable.Body>, { context })
    expect($.prop('aria-hidden')).toBe(true)
  })

  it('renders children', () => {
    const context = {
      ...defaultContext
    }
    const $ = shallow(<Foldable.Body>test child</Foldable.Body>, { context })
    expect($.contains('test child')).toBe(true)
  })

  it('renders with an id passed via context', () => {
    const context = {
      ...defaultContext,
      foldableId: 'test-id'
    }
    const $ = shallow(<Foldable.Body>_</Foldable.Body>, { context })
    expect($.prop('id')).toBe('test-id')
  })

  describe('transition', () => {
    it('renders with the appropriate classNames', () => {
      const $ = shallow(
        <Foldable.Body transition>_</Foldable.Body>
        , { context: defaultContext }
      )
      expect($.hasClass(`${NAMESPACE}c-foldable__body`)).toBe(true)
      expect($.hasClass(`${NAMESPACE}c-foldable__body`)).toBe(true)
    })

    it('mounts with display none and overflow hidden if closed', () => {
      const context = {
        ...defaultContext,
        isFoldableOpen: false
      }
      const $ = mount(
        <Foldable.Body transition>_</Foldable.Body>
        , { context }
      )

      expect($.html()).toMatch(/style="display: none; overflow: hidden;"/)
    })

    it('only executes transitions if component updates with a transition prop', () => {
      const context = {
        ...defaultContext,
        isFoldableOpen: false
      }
      const $ = mount(
        <Foldable.Body>_</Foldable.Body>
        , { context }
      )

      const mockFn = jest.fn()

      $.instance().executeTransitions = mockFn

      expect(mockFn).not.toHaveBeenCalled()

      $.setContext({
        ...defaultContext,
        isFoldableOpen: true
      })
      expect(mockFn).not.toHaveBeenCalled()
    })

    it('when mounted open it gets the height and applies as a style', () => {
      getHeight.mockImplementation(() => '100')
      jest.useFakeTimers()

      const context = {
        ...defaultContext,
        isFoldableOpen: true
      }
      const $ = mount(
        <Foldable.Body transition>
          _
        </Foldable.Body>
        , { context }
      )

      expect($.html()).toMatch(/style="height: auto;"/)

      jest.runAllTimers()
      expect($.html()).toMatch(/style="height: 100px;"/)
    })

    it('can transition to open from initial closed position', () => {
      jest.useFakeTimers()
      getHeight.mockImplementation(() => '100')

      const context = {
        ...defaultContext,
        isFoldableOpen: false
      }
      const $ = mount(
        <Foldable.Body transition>
          _
        </Foldable.Body>
        , { context }
      )

      expect($.html()).toMatch(/style="display: none; overflow: hidden;"/)
      $.setContext({
        ...defaultContext,
        isFoldableOpen: true
      })
      expect($.html()).toMatch(/style="display: block; overflow: hidden; height: 0px;"/)

      jest.runTimersToTime(1)
      expect($.html()).toMatch(/style="display: block; overflow: hidden; height: 100px;"/)

      jest.runAllTimers()
      expect($.html()).toMatch(/style="display: block; overflow: visible; height: auto;"/)
    })

    it('can transition to closed from initial open position', () => {
      jest.useFakeTimers()
      getHeight.mockImplementation(() => '100')

      const context = {
        ...defaultContext,
        isFoldableOpen: true
      }
      const $ = mount(
        <Foldable.Body transition>
          _
        </Foldable.Body>
        , { context }
      )

      expect($.html()).toMatch(/style="height: auto;"/)

      jest.runAllTimers()
      expect($.html()).toMatch(/style="height: 100px;"/)

      $.setContext({
        ...defaultContext,
        isFoldableOpen: false
      })
      expect($.html()).toMatch(/style="height: 100px;"/)

      jest.runTimersToTime(1)
      expect($.html()).toMatch(/style="height: 0px; overflow: hidden;"/)

      jest.runAllTimers()
      expect($.html()).toMatch(/style="height: 0px; overflow: hidden; display: none;"/)
    })

    it('can take a set transition duration and handles opening before close duration has ended', () => {
      jest.useFakeTimers()
      getHeight.mockImplementation(() => '100')

      const context = {
        ...defaultContext,
        isFoldableOpen: true
      }
      const $ = mount(
        <Foldable.Body transition transitionDuration={1000}>
          _
        </Foldable.Body>
        , { context }
      )

      expect($.html()).toMatch(/style="height: auto;"/)

      jest.runAllTimers()
      expect($.html()).toMatch(/style="height: 100px;"/)

      $.setContext({
        ...defaultContext,
        isFoldableOpen: false
      })
      expect($.html()).toMatch(/style="height: 100px;"/)

      jest.runTimersToTime(1)
      expect($.html()).toMatch(/style="height: 0px; overflow: hidden;"/)

      jest.runTimersToTime(500)
      $.setContext({
        ...defaultContext,
        isFoldableOpen: true
      })

      expect($.html()).toMatch(/style="height: 100px; overflow: hidden; display: block;"/)

      jest.runAllTimers()
      expect($.html()).toMatch(/style="height: auto; overflow: visible; display: block;"/)
    })

    it('removes styles related to transition if transition prop is removed', () => {
      jest.useFakeTimers()
      getHeight.mockImplementation(() => '100')

      const context = {
        ...defaultContext,
        isFoldableOpen: true
      }

      const $ = mount(
        <Foldable.Body transition>
          _
        </Foldable.Body>
        , { context }
      )

      expect($.html()).toMatch(/style="height: auto;"/)

      jest.runAllTimers()
      expect($.html()).toMatch(/style="height: 100px;"/)

      $.setProps({
        transition: false
      })

      expect($.html()).toMatch(/style=""/)
    })

    it('sets initial transition styles if transition prop is added', () => {
      jest.useFakeTimers()
      getHeight.mockImplementation(() => '100')

      const context = {
        ...defaultContext,
        isFoldableOpen: true
      }

      const $ = mount(
        <Foldable.Body>
          _
        </Foldable.Body>
        , { context }
      )

      expect($.html()).not.toMatch(/style="height/)

      $.setProps({
        transition: true
      })

      expect($.html()).toMatch(/style="height: auto;/)
    })
  })
})
