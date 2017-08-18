import React from 'react'
import { shallow } from 'enzyme'

import { Modal } from '../'

describe('<Modal.Dismiss />', () => {
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

  it('renders with the correct default className', () => {
    const $ = shallow(<Modal.Dismiss />)
    expect($.hasClass('c-modal__dismiss')).toBe(true)
  })

  it('renders with the defined className', () => {
    const $ = shallow(<Modal.Dismiss className="test" />)
    expect($.hasClass('c-modal__dismiss test')).toBe(true)
  })

  it('takes a callback that is called when clicked', () => {
    const mockFn = jest.fn()
    const $ = shallow(<Modal.Dismiss closeModal={mockFn} />)

    expect(mockFn).toHaveBeenCalledTimes(0)

    $.simulate('click')
    expect(mockFn).toHaveBeenCalledTimes(1)
  })
})
