import React from 'react'
import { shallow } from 'enzyme'

import { Modal } from '../'

describe('<Modal.Overlay />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Modal.Overlay className="test">_</Modal.Overlay>)
    expect($.hasClass('c-modal__overlay test')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Modal.Overlay
        style={{ position: 'relative' }}
        ariaHidden="true"
      >
        test child
      </Modal.Overlay>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
