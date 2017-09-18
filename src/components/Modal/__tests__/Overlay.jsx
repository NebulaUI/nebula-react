import React from 'react'
import { shallow, mount } from 'enzyme'

import { NAMESPACE } from '../../../constants'

import { Modal } from '../'

const defaultContext = {
  closeModal: jest.fn(),
  handleModalOverlayMount: jest.fn()
}

describe('<Modal.Overlay />', () => {
  it('renders a "button" by default', () => {
    const $ = shallow(<Modal.Overlay />, { context: defaultContext })
    expect($.type()).toBe('button')
  })

  it('renders a defined tag', () => {
    const $ = shallow(<Modal.Overlay tag="article" />, { context: defaultContext })
    expect($.type()).toBe('article')
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Modal.Overlay className="test" />, { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-modal__overlay ${NAMESPACE}test`)).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Modal.Overlay style={{ position: 'relative' }} ariaHidden="true" />
    , { context: defaultContext })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('closes the modal when clicked', () => {
    const mockCloseModal = jest.fn()
    const context = {
      ...defaultContext,
      closeModal: mockCloseModal
    }
    const $ = shallow(<Modal.Overlay clickToClose />, { context })
    expect(mockCloseModal).not.toHaveBeenCalled()

    $.simulate('click')
    expect(mockCloseModal).toHaveBeenCalled()
  })

  it('doesnt close the modal when clicked', () => {
    const mockCloseModal = jest.fn()
    const context = {
      ...defaultContext,
      closeModal: mockCloseModal
    }
    const $ = shallow(<Modal.Overlay />, { context })
    expect(mockCloseModal).not.toHaveBeenCalled()

    $.simulate('click')
    expect(mockCloseModal).not.toHaveBeenCalled()
  })

  it('calls "handleModalOverlayMount() when mounted', () => {
    const mockHandleModalOverlayMount = jest.fn()
    const context = {
      ...defaultContext,
      handleModalOverlayMount: mockHandleModalOverlayMount
    }
    mount(<Modal.Overlay clickToClose />, { context })
    expect(mockHandleModalOverlayMount).toHaveBeenCalledWith(true)
  })
})
