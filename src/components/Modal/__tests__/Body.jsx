import React from 'react'
import { shallow } from 'enzyme'

import { Modal } from '../'

describe('<Modal.Body />', () => {
  it('renders a "div" by default', () => {
    const $ = shallow(<Modal.Body>_</Modal.Body>)
    expect($.type()).toBe('div')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Modal.Body node="article">_</Modal.Body>)
    expect($.type()).toBe('article')
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Modal.Body className="test">_</Modal.Body>)
    expect($.hasClass('c-modal__body test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Modal.Body>Test child</Modal.Body>)
    expect($.contains('Test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Modal.Body
        style={{ position: 'relative' }}
        ariaHidden="true"
      >
        _
      </Modal.Body>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
