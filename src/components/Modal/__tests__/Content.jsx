import React from 'react'
import { shallow } from 'enzyme'

import { Modal } from '../'

describe('<Modal.Content />', () => {
  it('renders a "div" by default', () => {
    const $ = shallow(<Modal.Content>_</Modal.Content>)
    expect($.type()).toBe('div')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Modal.Content node="article">_</Modal.Content>)
    expect($.type()).toBe('article')
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Modal.Content className="test">_</Modal.Content>)
    expect($.hasClass('c-modal__content test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Modal.Content>Test child</Modal.Content>)
    expect($.contains('Test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Modal.Content
        style={{ position: 'relative' }}
        ariaHidden="true"
      >
        _
      </Modal.Content>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})