import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Modal } from '../'

describe('<Modal.Dismiss />', () => {
  it('renders with the correct default className', () => {
    const $ = shallow(<Modal.Dismiss />)
    expect($.hasClass(`${NAMESPACE}c-modal__dismiss`)).toBe(true)
  })

  it('renders with the defined className', () => {
    const $ = shallow(<Modal.Dismiss className="test" />)
    expect($.hasClass(`${NAMESPACE}c-modal__dismiss`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders a "button" by default', () => {
    const $ = shallow(<Modal.Dismiss />)
    expect($.type()).toBe('button')
  })

  it('renders a defined tag', () => {
    const $ = shallow(<Modal.Dismiss tag="article" />)
    expect($.type()).toBe('article')
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Modal.Dismiss style={{ position: 'relative' }} ariaHidden="true" />
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })

  it('renders children', () => {
    const $ = shallow(<Modal.Dismiss>test child</Modal.Dismiss>)
    expect($.contains('test child')).toBe(true)
  })
})
