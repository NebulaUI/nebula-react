import React from 'react'
import { shallow, mount } from 'enzyme'

import { Modal } from '../'

const defaultProps = {
  closeModal: jest.fn(),
  isOpen: false
}

describe('<Modal.Wrapper />', () => {
  it('renders a "div" by default', () => {
    const $ = shallow(<Modal.Wrapper {...defaultProps}>_</Modal.Wrapper>)
    expect($.type()).toBe('div')
  })

  it('renders a defined node type', () => {
    const props = {
      ...defaultProps,
      node: 'article'
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
    expect($.hasClass('c-modal test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Modal.Wrapper {...defaultProps}>Test child</Modal.Wrapper>)
    expect($.contains('Test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const props = {
      ...defaultProps,
      node: 'article',
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
        <Modal.Content>
          <Modal.Dismiss />
        </Modal.Content>
      </Modal.Wrapper>
    )
    expect(mockClose).toHaveBeenCalledTimes(0)

    $.find('.c-modal__overlay').simulate('click')
    expect(mockClose).toHaveBeenCalledTimes(1)

    $.find('.c-modal__dismiss').simulate('click')
    expect(mockClose).toHaveBeenCalledTimes(2)
  })
})
