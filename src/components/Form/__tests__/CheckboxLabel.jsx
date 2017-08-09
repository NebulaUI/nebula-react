import React from 'react'
import { shallow } from 'enzyme'

import { Form } from '../'

describe('<Form.Checkbox.Label />', () => {
  it('renders with appropriate classNames', () => {
    const $ = shallow(<Form.Checkbox.Label className="test" htmlFor="check-1" />)
    expect($.hasClass('c-form-input__label c-form-input__label--checkbox test')).toBe(true)
  })

  it('renders with a htmlFor prop', () => {
    const $ = shallow(<Form.Checkbox.Label htmlFor="check-1" />)
    expect($.prop('htmlFor')).toBe('check-1')
  })

  it('renders children', () => {
    const $ = shallow(
      <Form.Checkbox.Label htmlFor="check-1">
        Test label children
      </Form.Checkbox.Label>
    )
    expect($.contains('Test label children')).toBe(true)
  })
})
