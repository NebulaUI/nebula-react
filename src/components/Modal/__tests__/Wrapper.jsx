import React from 'react'
import { shallow, mount } from 'enzyme'

import { NAMESPACE } from '../../../constants'

import { Modal } from '../'

const defaultProps = {
  closeModal: jest.fn(),
  ariaLabel: '_'
}

beforeEach(() => {
  jest.useFakeTimers()
})

describe('<Modal.Wrapper />', () => {
  it('prevents page scroll when mounted', () => {
    // eslint-disable-next-line no-underscore-dangle
    const getDocumentStyle = prop => document.documentElement.style._values[prop]

    expect(getDocumentStyle('overflow')).toBe(undefined)
    const $ = mount(<Modal.Wrapper {...defaultProps}>_</Modal.Wrapper>)
    expect(getDocumentStyle('overflow')).toBe('hidden')

    $.unmount()
    expect(getDocumentStyle('overflow')).toBe(undefined)
  })

  it('renders a "div" by default', () => {
    const $ = shallow(<Modal.Wrapper {...defaultProps}>_</Modal.Wrapper>)
    expect($.type()).toBe('div')
  })

  it('renders a defined tag type', () => {
    const props = {
      ...defaultProps,
      tag: 'article'
    }
    const $ = shallow(<Modal.Wrapper {...props}>_</Modal.Wrapper>)
    expect($.type()).toBe('article')
  })

  it('renders with appropriate classNames', () => {
    const props = {
      ...defaultProps,
      className: 'test'
    }
    const $ = shallow(<Modal.Wrapper {...props}>_</Modal.Wrapper>)
    expect($.hasClass(`${NAMESPACE}c-modal ${NAMESPACE}test`)).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Modal.Wrapper {...defaultProps}>Test child</Modal.Wrapper>)
    expect($.contains('Test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const props = {
      ...defaultProps,
      tag: 'article',
      style: { position: 'relative' },
      ariaHidden: true
    }
    const $ = shallow(
      <Modal.Wrapper {...props}>
        _
      </Modal.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe(true)
  })

  it('closes when Modal.Overlay or Modal.Dismiss is clicked', () => {
    const mockClose = jest.fn()
    const props = {
      ...defaultProps,
      closeModal: mockClose
    }
    const $ = mount(
      <Modal.Wrapper {...props}>
        <Modal.Overlay clickToClose />
        <Modal.Content>
          <Modal.Close>
            <Modal.Dismiss />
          </Modal.Close>
        </Modal.Content>
      </Modal.Wrapper>
    )
    expect(mockClose).toHaveBeenCalledTimes(0)

    $.find(`.${NAMESPACE}c-modal__overlay`).simulate('click')
    expect(mockClose).toHaveBeenCalledTimes(1)

    $.find(`.${NAMESPACE}c-modal__dismiss`).simulate('click')
    expect(mockClose).toHaveBeenCalledTimes(2)
  })

  it('add is-open className when fully mounted', () => {
    const $ = mount(<Modal.Wrapper {...defaultProps}>_</Modal.Wrapper>)
    expect($.hasClass(`${NAMESPACE}is-open`)).toBe(false)

    jest.runAllTimers()
    expect($.hasClass(`${NAMESPACE}is-open`)).toBe(true)
  })

  it('closes the modal after a defined timeout', () => {
    const mockCloseModal = jest.fn()
    const props = {
      ...defaultProps,
      closeModal: mockCloseModal,
      timeout: 1000
    }
    mount(<Modal.Wrapper {...props}>_</Modal.Wrapper>)
    expect(mockCloseModal).not.toHaveBeenCalled()

    expect(setTimeout.mock.calls[0][1]).toBe(1000)
    jest.runAllTimers()
    expect(mockCloseModal).toHaveBeenCalled()
  })

  it('closes when escape key is pressed', () => {
    const mockCloseModal = jest.fn()
    const props = {
      ...defaultProps,
      closeModal: mockCloseModal
    }
    mount(<Modal.Wrapper {...props}>_</Modal.Wrapper>)
    expect(mockCloseModal).not.toHaveBeenCalled()

    const event = new KeyboardEvent('keyup', {
      bubbles: false,
      cancelable: false,
      keyCode: 27
    })
    document.dispatchEvent(event)
    expect(mockCloseModal).toHaveBeenCalledTimes(1)

    const event2 = new KeyboardEvent('keyup', {
      bubbles: false,
      cancelable: false,
      keyCode: 28
    })
    document.dispatchEvent(event2)
    expect(mockCloseModal).toHaveBeenCalledTimes(1)
  })

  it('renders at a defined width', () => {
    const props = {
      ...defaultProps,
      width: 100
    }
    const $ = mount(
      <Modal.Wrapper {...props}>
        <Modal.Overlay clickToClose />
        <Modal.Body>_</Modal.Body>
      </Modal.Wrapper>
    )
    expect($.find(Modal.Body).html()).toMatch(/style="width: 100px;"/)
  })

  it('can be aligned to the top of the viewport', () => {
    const props = {
      ...defaultProps,
      alignTop: true
    }
    const $ = shallow(
      <Modal.Wrapper {...props}>
        _
      </Modal.Wrapper>
    )
    expect($.hasClass(`${NAMESPACE}c-modal--align-top`)).toBe(true)
  })
})
