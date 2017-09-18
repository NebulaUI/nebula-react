import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'

import { Form } from '../'

describe('<Form.RadioLabel />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Form.RadioLabel className="test" htmlFor="radio-1" />)
    expect($.hasClass(`${NAMESPACE}c-form-input__label ${NAMESPACE}c-form-input__label--radio ${NAMESPACE}test`)).toBe(true)
  })

  it('renders with a htmlFor prop', () => {
    const $ = shallow(<Form.RadioLabel htmlFor="radio-1" />)
    expect($.prop('htmlFor')).toBe('radio-1')
  })

  it('renders children', () => {
    const $ = shallow(
      <Form.RadioLabel htmlFor="radio-1">
        Test label children
      </Form.RadioLabel>
    )
    expect($.contains('Test label children')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Form.RadioLabel htmlFor="test" style={{ position: 'relative' }} ariaHidden="true">
        _
      </Form.RadioLabel>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
