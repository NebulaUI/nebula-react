import React from 'react'
import { shallow } from 'enzyme'

import { Modal } from '../'

describe('<Modal.Wrapper />', () => {
  it('renders a "div" by default', () => {
    const $ = shallow(<Modal.Wrapper>_</Modal.Wrapper>)
    expect($.type()).toBe('div')
  })

  it('renders a defined node type', () => {
    const $ = shallow(<Modal.Wrapper node="article">_</Modal.Wrapper>)
    expect($.type()).toBe('article')
  })

  it('renders with appropriate classNames', () => {
    const $ = shallow(<Modal.Wrapper className="test">_</Modal.Wrapper>)
    expect($.hasClass('c-modal test')).toBe(true)
  })

  it('renders children', () => {
    const $ = shallow(<Modal.Wrapper>Test child</Modal.Wrapper>)
    expect($.contains('Test child')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Modal.Wrapper
        style={{ position: 'relative' }}
        ariaHidden="true"
      >
        _
      </Modal.Wrapper>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
