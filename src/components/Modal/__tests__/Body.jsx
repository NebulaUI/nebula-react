import React from 'react'
import { shallow } from 'enzyme'
import FocusTrap from 'focus-trap-react'

import { NAMESPACE } from '../../../constants'

import { Modal } from '../'

const defaultContext = {
  modalClickOutsideDeactivates: false,
  modalIsFullyMounted: false
}

describe('<Modal.Body />', () => {
  it('renders a "div" by default', () => {
    const $ = shallow(<Modal.Body>_</Modal.Body>, { context: defaultContext })
    expect($.type()).toBe('div')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Modal.Body tag="article">_</Modal.Body>, { context: defaultContext })
    expect($.type()).toBe('article')
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Modal.Body className="test">_</Modal.Body>, { context: defaultContext })
    expect($.hasClass(`${NAMESPACE}c-modal__body ${NAMESPACE}test`)).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Modal.Body
        style={{ position: 'relative' }}
        ariaHidden="true"
      >
        _
      </Modal.Body>
      , { context: defaultContext })
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders children when open', () => {
    const context = {
      ...defaultContext,
      modalIsFullyMounted: true
    }
    const $ = shallow(<Modal.Body>Test child</Modal.Body>, { context })
    expect($.contains('Test child')).toBe(true)
  })

  it('does not render children when closed', () => {
    const context = {
      ...defaultContext,
      modalIsFullyMounted: false
    }
    const $ = shallow(<Modal.Body>Test child</Modal.Body>, { context })
    expect($.contains('Test child')).toBe(false)
  })

  it('renders <FocusTrap /> when modal is open', () => {
    const context = {
      ...defaultContext,
      modalIsFullyMounted: true,
      modalClickOutsideDeactivates: true
    }
    const $ = shallow(<Modal.Body>_</Modal.Body>, { context })
    expect($.find(FocusTrap)).toHaveLength(1)
    expect($.find(FocusTrap).prop('focusTrapOptions')).toEqual({
      clickOutsideDeactivates: true
    })
  })

  it('renders <FocusTrap /> when modal not open', () => {
    const context = {
      ...defaultContext,
      modalIsFullyMounted: false
    }
    const $ = shallow(<Modal.Body>_</Modal.Body>, { context })
    expect($.find(FocusTrap)).toHaveLength(0)
  })
})
