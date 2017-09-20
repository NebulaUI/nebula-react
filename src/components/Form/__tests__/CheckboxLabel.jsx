import React from 'react'
import { shallow } from 'enzyme'

import { NAMESPACE } from '../../../constants'
import { Form } from '../'

describe('<Form.CheckboxLabel />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Form.CheckboxLabel className="test" htmlFor="checkbox-1" />)
    expect($.hasClass(`${NAMESPACE}c-form-input__label ${NAMESPACE}c-form-input__label--checkbox`)).toBe(true)
    expect($.hasClass('test')).toBe(true)
  })

  it('renders with a htmlFor prop', () => {
    const $ = shallow(<Form.CheckboxLabel htmlFor="checkbox-1" />)
    expect($.prop('htmlFor')).toBe('checkbox-1')
  })

  it('renders children', () => {
    const $ = shallow(
      <Form.CheckboxLabel htmlFor="checkbox-1">
        Test label children
      </Form.CheckboxLabel>
    )
    expect($.contains('Test label children')).toBe(true)
  })

  it('renders with attributes', () => {
    const $ = shallow(
      <Form.CheckboxLabel htmlFor="test" style={{ position: 'relative' }} ariaHidden="true">
        _
      </Form.CheckboxLabel>
    )
    expect($.prop('style')).toEqual({
      position: 'relative'
    })
    expect($.prop('ariaHidden')).toBe('true')
  })
})
